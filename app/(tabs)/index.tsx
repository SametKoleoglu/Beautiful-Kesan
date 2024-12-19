import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Image
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Link, router } from "expo-router";

const { width } = Dimensions.get("window");

// Problem kartı için örnek veri tipi
type Problem = {
  id: string;
  title: string;
  location: string;
  type: string;
  status: "active" | "resolved";
  date: string;
  description: string;
};

// Problem kartı komponenti
const ProblemCard = ({ problem }: { problem: Problem }) => {
  return (
    <TouchableOpacity onPress={() => {
      router.push({
        pathname: `/detail/${problem.id}`,
        params: { problem: JSON.stringify(problem) }
      });
    }}>
      <View className="bg-white p-4 rounded-lg shadow-sm my-4">
        <View className="flex-row justify-between items-center">
          <Text className="text-lg font-bold text-neutral-700">
            {problem.title}
          </Text>
          <View
            className={`px-3 py-1 rounded-full ${problem.status === "active" ? "bg-red-100" : "bg-green-100"
              }`}
          >
            <Text
              className={`${problem.status === "active" ? "text-red-600" : "text-green-600"
                } text-sm`}
            >
              {problem.status === "active" ? "Aktif" : "Çözüldü"}
            </Text>
          </View>
        </View>

        <View className="flex-row items-center mt-2">
          <Feather name="map-pin" size={14} color="gray" />
          <Text className="text-neutral-500 ml-1">{problem.location}</Text>
        </View>

        <Text className="text-neutral-600 mt-2">{problem.description}</Text>

        <View className="flex-row justify-between items-center mt-3">
          <Text className="text-neutral-400 text-sm">{problem.date}</Text>
          <Text className="text-neutral-500 text-sm">{problem.type}</Text>
        </View>
      </View>
    </TouchableOpacity>

  );
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([])

  /*const getProblems = async() => {
    setData(response.data)
  }*/
  // Örnek veri
  const problems: Problem[] = [
    {
      id: "1",
      title: "Su Kesintisi",
      location: "Cumhuriyet Mahallesi, 156. Sokak",
      type: "Altyapı",
      status: "active",
      date: "2024-03-20",
      description: "Sokakta yaklaşık 3 saattir su kesintisi yaşanmaktadır.",
    },
    {
      id: "2",
      title: "Su Kesintisi",
      location: "Cumhuriyet Mahallesi, 156. Sokak",
      type: "Altyapı",
      status: "active",
      date: "2024-03-20",
      description: "Sokakta yaklaşık 3 saattir su kesintisi yaşanmaktadır.",
    },
    {
      id: "3",
      title: "Su Kesintisi",
      location: "Cumhuriyet Mahallesi, 156. Sokak",
      type: "Altyapı",
      status: "active",
      date: "2024-03-20",
      description: "Sokakta yaklaşık 3 saattir su kesintisi yaşanmaktadır.",
    },
    // Daha fazla örnek veri eklenebilir
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Arama Bölümü */}
      <View className="bg-white p-4 shadow-sm">
        <View className="flex-row space-x-2">
          <View className="flex-1 flex-row items-center border border-gray-300 rounded-lg px-3 bg-gray-50">
            <Feather name="search" size={20} color="gray" />
            <TextInput
              className="flex-1 py-2 px-3"
              placeholder="Mahalle veya sokak ara..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <TouchableOpacity
            className="bg-blue-600 px-4 rounded-lg justify-center"
            onPress={() => {
              // Arama fonksiyonu
              console.log("Arama yapılıyor:", searchQuery);
            }}
          >
            <Text className="text-white font-medium">Ara</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Sorunlar Listesi */}
      <ScrollView className="flex-1 px-4 pt-4">
        {problems.map((problem) => (
          <ProblemCard key={problem.id} problem={problem} />
        ))}
      </ScrollView>




    </SafeAreaView>
  );
}
