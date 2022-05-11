import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import DatePicker from "react-native-date-picker";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { SafeAreaView } from "react-native-safe-area-context";
import { EventCard } from "../../Components/EventCard";
import {
  Container,
  InputLabel,
  Spacing,
  StyledButton,
  StyledInput,
  StyledNameInput,
  StyledTextButton,
  Title,
} from "./styles";

interface Event {
  id: string;
  eventName: string;
  eventDescription: string;
  eventDate: Date;
}

export function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [open, setOpen] = useState(false);
  const [day, setDay] = useState("");

  const [events, setEvents] = useState<Event[]>([]);

  const calculateDaysUntilEvent = (date: Date) => {
    const today = new Date();
    const eventDate = new Date(date);
    const diffTime = Math.abs(today.getTime() - eventDate.getTime());
    if (diffTime < 76400000) {
      return "Hoje!";
    }
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const convertDaysToMilliseconds = (days: number) => {
    return days * 24 * 60 * 60 * 1000;
  };

  return (
    <SafeAreaView>
      <Container>
        <Title>Cadastrar Evento</Title>

        <View>
          <InputLabel>Nome do Evento</InputLabel>
          <StyledNameInput
            value={eventName}
            onChangeText={(value) => {
              setEventName(value);
            }}
          />
        </View>
        <View>
          <InputLabel>Descrição do Evento</InputLabel>
          <StyledInput
            multiline={true}
            value={eventDescription}
            onChangeText={(value) => {
              setEventDescription(value);
            }}
          />
        </View>

        <InputLabel>Quantos dias para o evento?</InputLabel>
        <StyledInput
          value={day}
          keyboardType="numeric"
          onChangeText={(value) => {
            setDay(value);
          }}
        />

        <Spacing>
          <InputLabel>Ou selecione uma data</InputLabel>
        </Spacing>
        <Spacing>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <InputLabel>{String(selectedDate.toLocaleDateString())}</InputLabel>
            <Text>Selecionar Data</Text>
          </TouchableOpacity>
          <DatePicker
            modal
            mode="date"
            open={open}
            date={selectedDate}
            onConfirm={(date) => {
              setOpen(false);
              setSelectedDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </Spacing>
        <StyledButton
          onPress={() => {
            setEvents([
              ...events,
              {
                id: String(Math.random()),
                eventName: eventName,
                eventDescription: eventDescription,
                eventDate:
                  Number(day) > 0
                    ? new Date(
                        convertDaysToMilliseconds(Number(day)) +
                          new Date().getTime()
                      )
                    : new Date(selectedDate),
              },
            ]);
            setEventName("");
            setEventDescription("");
            setDay("");
            setSelectedDate(new Date());
          }}
        >
          <StyledTextButton>Salvar Evento</StyledTextButton>
        </StyledButton>

        <FlatList
          data={events}
          style={{ width: "100%", marginTop: 20 }}
          renderItem={({ item }) => (
            <EventCard
              name={item.eventName}
              daysToEvent={calculateDaysUntilEvent(item.eventDate)}
              description={item.eventDescription}
              deleteButton={() => {
                setEvents(events.filter((event) => event.id !== item.id));
              }}
            />
          )}
          contentContainerStyle={{
            paddingBottom: getBottomSpace() + 300,
          }}
        />
      </Container>
    </SafeAreaView>
  );
}
