import { ScrollView, Text, View } from "react-native";
import { styles } from "../styles/styles";
import { RiContactsFill } from "react-icons/ri";

const contactList = [
  { id: "1", name: "John Doe", phone: "123-456-7890" },
  { id: "2", name: "Jane Smith", phone: "987-654-3210" },
  { id: "3", name: "Alice Johnson", phone: "555-123-4567" },
  { id: "4", name: "Bob Brown", phone: "444-555-6666" },
  { id: "5", name: "Charlie Davis", phone: "333-444-5555" },
  { id: "6", name: "David Wilson", phone: "222-333-4444" },
  { id: "7", name: "Eve Adams", phone: "111-222-3333" },
  { id: "8", name: "Frank Miller", phone: "999-888-7777" },
  { id: "9", name: "Grace Lee", phone: "888-777-6666" },
  { id: "10", name: "Hank Green", phone: "777-666-5555" },
  { id: "11", name: "Ivy White", phone: "666-555-4444" },
  { id: "12", name: "Jack Black", phone: "555-444-3333" },
  { id: "13", name: "Karen Scott", phone: "444-333-2222" },
  { id: "14", name: "Leo King", phone: "333-222-1111" },
  { id: "15", name: "Mona Lisa", phone: "222-111-0000" },
  { id: "16", name: "Nina Brown", phone: "111-000-9999" },
  { id: "17", name: "Oscar Wilde", phone: "000-999-8888" },
  { id: "18", name: "Paul Newman", phone: "999-888-7777" },
  { id: "19", name: "Quincy Adams", phone: "888-777-6666" },
  { id: "20", name: "Rachel Green", phone: "777-666-5555" },
  { id: "21", name: "Sam Smith", phone: "666-555-4444" },
  { id: "22", name: "Tina Turner", phone: "555-444-3333" },
  { id: "23", name: "Uma Thurman", phone: "444-333-2222" },
  { id: "24", name: "Victor Hugo", phone: "333-222-1111" },
  { id: "25", name: "Wendy Williams", phone: "222-111-0000" },
];

export const Contacts = () => {
  return (
    <ScrollView>
      {contactList.map((c) => {
        return (
          <View key={c.id} style={styles.contactCard}>
            <Text style={{ fontSize: 22, paddingLeft: 15, width: 200 }}>
              {c.name}
            </Text>
            <Text style={{ fontSize: 20, width: 200 }}>{c.phone}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};
