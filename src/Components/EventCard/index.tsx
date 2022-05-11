import { Text, View, TouchableOpacity } from "react-native";
import {
  BottomContainer,
  Container,
  DeleteButton,
  DeleteTextButton,
  TopContainer,
} from "./styles";

interface EventCardProps {
  name: string;
  description: string;
  daysToEvent: string | number;
  deleteButton: () => void;
}

export function EventCard({
  name,
  description,
  daysToEvent,
  deleteButton,
}: EventCardProps) {
  return (
    <Container>
      <TopContainer>
        <Text>{name}</Text>
        <Text>
          {typeof daysToEvent === "number" ? `${daysToEvent} d` : daysToEvent}
        </Text>
      </TopContainer>
      <View>
        <Text>{description}</Text>
      </View>
      <BottomContainer>
        <DeleteButton onPress={deleteButton}>
          <DeleteTextButton>Excluir Evento</DeleteTextButton>
        </DeleteButton>
      </BottomContainer>
    </Container>
  );
}
