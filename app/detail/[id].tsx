import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { Feather } from "@expo/vector-icons";

type Problem = {
     id: string;
     title: string;
     location: string;
     type: string;
     status: "active" | "resolved";
     image: string;
     date: string;
     description: string;
};

export default function ProblemDetail() {
     const { problem } = useLocalSearchParams();
     const problemData: Problem = JSON.parse(problem as string);

     return (
          <>
               <Stack.Screen
                    options={{
                         title: problemData.title,
                         headerStyle: {
                              backgroundColor: "#2550ec",
                         },
                         headerTintColor: "#fff",
                         headerTitleStyle: {
                              fontWeight: "bold",
                         },
                         headerTitleAlign: "center",
                         headerBackTitle: "Geri",
                         // Başlık çok uzunsa kısaltma
                         headerTitleMaxWidth: 200,
                    }}
               />
               <ScrollView className="flex-1 bg-white">
                    {/* Problem Başlığı ve Durumu */}
                    <View className="bg-white p-4">
                         <View className="flex-row justify-between items-center">
                              <Text className="text-2xl font-bold text-gray-800">
                                   {problemData.title}
                              </Text>
                              <View
                                   className={`px-3 py-1 rounded-full ${problemData.status === "active" ? "bg-red-100" : "bg-green-100"
                                        }`}
                              >
                                   <Text
                                        className={`${problemData.status === "active" ? "text-red-600" : "text-green-600"
                                             } text-sm font-medium`}
                                   >
                                        {problemData.status === "active" ? "Aktif" : "Çözüldü"}
                                   </Text>
                              </View>
                         </View>

                         {/* Lokasyon */}
                         <View className="flex-row items-center mt-4">
                              <Feather name="map-pin" size={16} color="gray" />
                              <Text className="text-gray-600 ml-2">{problemData.location}</Text>
                         </View>

                         {/* Tarih ve Tip */}
                         <View className="flex-row justify-between mt-4">
                              <View className="flex-row items-center">
                                   <Feather name="calendar" size={16} color="gray" />
                                   <Text className="text-gray-600 ml-2">{problemData.date}</Text>
                              </View>
                              <View className="flex-row items-center">
                                   <Feather name="tag" size={16} color="gray" />
                                   <Text className="text-gray-600 ml-2">{problemData.type}</Text>
                              </View>
                         </View>
                    </View>

                    {/* Problem Açıklaması */}
                    <View className="bg-white mt-2 p-4">
                         <Text className="text-lg font-semibold text-gray-800 mb-2">
                              Problem Açıklaması
                         </Text>
                         <Text className="text-gray-600 leading-6">
                              {problemData.description}
                         </Text>
                    </View>

                    {/* Buraya ek özellikler eklenebilir:
            - Fotoğraflar
            - Yorumlar
            - Güncelleme geçmişi
            - vb.
        */}
                    <View>
                         <Image source={{ uri: "https://picsum.photos/500/600" }} style={{ width: "100%", height: '100%', resizeMode: 'contain' }} />
                    </View>
               </ScrollView>
          </>
     );
}