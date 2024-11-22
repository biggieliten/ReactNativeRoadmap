import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  View,
  Image,
  StatusBar,
} from "react-native";
import { styles } from "../styles/styles";
import { useState } from "react";
import { contactType } from "../types/types";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
const contactList = [
  {
    id: "1",
    name: "John Doe",
    phone: "123-456-7890",
    work: "123-000-1111",
    home: "123-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
  {
    id: "2",
    name: "Jane Smith",
    phone: "987-654-3210",
    work: "987-000-1111",
    home: "987-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
  {
    id: "3",
    name: "Alice Johnson",
    phone: "555-123-4567",
    work: "555-000-1111",
    home: "555-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
  {
    id: "4",
    name: "Bob Brown",
    phone: "444-555-6666",
    work: "444-000-1111",
    home: "444-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
  {
    id: "5",
    name: "Charlie Davis",
    phone: "333-444-5555",
    work: "333-000-1111",
    home: "333-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
  {
    id: "6",
    name: "David Wilson",
    phone: "222-333-4444",
    work: "222-000-1111",
    home: "222-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
  {
    id: "7",
    name: "Eve Adams",
    phone: "111-222-3333",
    work: "111-000-1111",
    home: "111-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
  {
    id: "8",
    name: "Frank Miller",
    phone: "999-888-7777",
    work: "999-000-1111",
    home: "999-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
  {
    id: "9",
    name: "Grace Lee",
    phone: "888-777-6666",
    work: "888-000-1111",
    home: "888-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
  {
    id: "10",
    name: "Hank Green",
    phone: "777-666-5555",
    work: "777-000-1111",
    home: "777-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
  {
    id: "11",
    name: "Ivy White",
    phone: "666-555-4444",
    work: "666-000-1111",
    home: "666-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
  {
    id: "12",
    name: "Jack Black",
    phone: "555-444-3333",
    work: "555-000-1111",
    home: "555-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
  {
    id: "13",
    name: "Karen Scott",
    phone: "444-333-2222",
    work: "444-000-1111",
    home: "444-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
  {
    id: "14",
    name: "Leo King",
    phone: "333-222-1111",
    work: "333-000-1111",
    home: "333-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
  {
    id: "15",
    name: "Mona Lisa",
    phone: "222-111-0000",
    work: "222-000-1111",
    home: "222-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
  {
    id: "16",
    name: "Nina Brown",
    phone: "111-000-9999",
    work: "111-000-1111",
    home: "111-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
  {
    id: "17",
    name: "Oscar Wilde",
    phone: "000-999-8888",
    work: "000-000-1111",
    home: "000-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
  {
    id: "18",
    name: "Paul Newman",
    phone: "999-888-7777",
    work: "999-000-1111",
    home: "999-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
  {
    id: "19",
    name: "Quincy Adams",
    phone: "888-777-6666",
    work: "888-000-1111",
    home: "888-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
  {
    id: "20",
    name: "Rachel Green",
    phone: "777-666-5555",
    work: "777-000-1111",
    home: "777-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
  {
    id: "21",
    name: "Sam Smith",
    phone: "666-555-4444",
    work: "666-000-1111",
    home: "666-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
  {
    id: "22",
    name: "Tina Turner",
    phone: "555-444-3333",
    work: "555-000-1111",
    home: "555-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
  {
    id: "23",
    name: "Uma Thurman",
    phone: "444-333-2222",
    work: "444-000-1111",
    home: "444-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
  {
    id: "24",
    name: "Victor Hugo",
    phone: "333-222-1111",
    work: "333-000-1111",
    home: "333-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
  {
    id: "25",
    name: "Wendy Wilson",
    phone: "222-111-0000",
    work: "222-000-1111",
    home: "222-999-8888",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
  },
];

export const Contacts = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedContact, setSelectedContact] = useState<contactType>();

  const clickedContact = (contact: contactType) => {
    setSelectedContact(contact);
    setModalVisible(true);
  };

  return (
    <>
      <ScrollView style={{ backgroundColor: "#2d2d2e", width: "100%" }}>
        {contactList.map((c: contactType) => {
          return (
            <Pressable key={c.id} onPress={() => clickedContact(c)}>
              <View key={c.id} style={styles.contactCard}>
                <Image
                  style={{ width: 30, height: 30, marginLeft: 10 }}
                  source={{ uri: c.image }}
                  alt="No image found"
                />
                <Text
                  style={{
                    fontSize: 22,
                    paddingLeft: 15,
                    width: 200,
                    color: "white",
                  }}
                >
                  {c.name}
                </Text>
                <Text style={{ fontSize: 20, width: 200, color: "white" }}>
                  {c.phone}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
      {selectedContact && (
        <Modal
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#2d2d2e",
          }}
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <StatusBar backgroundColor="#2d2d2e" barStyle="dark-content" />
          <Pressable
            style={{ backgroundColor: "#2d2d2e" }}
            onPress={() => setModalVisible(false)}
          >
            <Text
              style={{
                fontSize: 25,
                margin: 10,
                width: 40,
                height: 40,
                textAlign: "center",
                backgroundColor: "#1374e9",
                borderRadius: 100,
                color: "white",
              }}
            >
              ✖
            </Text>
          </Pressable>
          <View
            style={{
              alignContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              backgroundColor: "#2d2d2e",
            }}
          >
            <Image
              style={{ width: 200, height: 200, marginTop: 40 }}
              source={{ uri: selectedContact.image }}
              alt="No image found"
            />
            <Text style={{ fontSize: 30, color: "white", marginTop: 20 }}>
              {selectedContact.name}
            </Text>
            <View
              style={{
                width: "auto",
                height: "auto",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <View style={styles.contactIcons}>
                <AntDesign name="message1" size={24} color="white" />
              </View>
              <View style={styles.contactIcons}>
                <Feather name="phone-call" size={24} color="white" />
              </View>
              <View style={styles.contactIcons}>
                <Feather name="video" size={24} color="white" />
              </View>
            </View>
            <View
              style={{
                borderRadius: 10,
                backgroundColor: "#434345",
                padding: 10,

                width: 300,
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",

                marginTop: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <Text style={styles.phoneLabel}>Mobile</Text>
                <Text style={styles.phoneNumber}>{selectedContact.phone}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <Text style={styles.phoneLabel}>Home</Text>
                <Text style={styles.phoneNumber}>{selectedContact.home}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  width: "100%",
                }}
              >
                <Text style={styles.phoneLabel}>Work</Text>
                <Text style={styles.phoneNumber}>{selectedContact.work}</Text>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};
