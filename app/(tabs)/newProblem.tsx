import {
     View,
     Text,
     ScrollView,
     TextInput,
     TouchableOpacity,
     Image,
     Alert,
     KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Picker } from '@react-native-picker/picker';
import { router } from "expo-router";



export default function NewProblem() {
     const [title, setTitle] = useState("");
     const [description, setDescription] = useState("");
     const [neighborhood, setNeighborhood] = useState("Seçiniz...");
     const [street, setStreet] = useState("Seçiniz...");
     const [image, setImage] = useState<string | null>(null);

     const pickImage = async () => {
          const result = await ImagePicker.launchImageLibraryAsync({
               mediaTypes: ImagePicker.MediaTypeOptions.Images,
               allowsEditing: true,
               aspect: [4, 3],
               quality: 1,
          });

          if (!result.canceled) {
               setImage(result.assets[0].uri);
          }
     };

     const handleSubmit = () => {
          // Form doğrulama ve gönderme işlemleri burada yapılacak
          console.log({ title, description, neighborhood, street, image });
     };

     return (
          <KeyboardAvoidingView className="flex-1 bg-gray-50">
               <ScrollView
                    className="flex-1 px-4 pt-6"
                    contentContainerStyle={{ paddingBottom: 100 }}
               >
                    {/* Problem Başlığı */}
                    <View className="mb-4">
                         <Text className="text-gray-700 font-medium mb-2">Problem Başlığı</Text>
                         <View className="bg-white rounded-xl border border-gray-200">
                              <TextInput
                                   className="p-4"
                                   placeholder="Örn: Su Kesintisi"
                                   value={title}
                                   onChangeText={setTitle}
                              />
                         </View>
                    </View>

                    {/* Problem Açıklaması */}
                    <View className="mb-4">
                         <Text className="text-gray-700 font-medium mb-2">Problem Açıklaması</Text>
                         <View className="bg-white rounded-xl border border-gray-200">
                              <TextInput
                                   className="p-4"
                                   placeholder="Problemi detaylı bir şekilde açıklayın..."
                                   multiline
                                   numberOfLines={4}
                                   textAlignVertical="top"
                                   value={description}
                                   onChangeText={setDescription}
                              />
                         </View>
                    </View>

                    {/* Problem Tipi */}
                    <View className="my-5">
                         <Text className="text-gray-700 font-medium mb-2">Problem Tipi</Text>

                         <Picker
                              selectedValue={neighborhood}
                              onValueChange={setNeighborhood}
                              className=""
                              itemStyle={{ color: "blue",height:50 }}
                         >
                              <Picker.Item label="Seçiniz..." value="Seçiniz..." />
                              <Picker.Item label="Tip 1" value="Tip 1" />
                              <Picker.Item label="Tip 2" value="Tip 2" />
                              <Picker.Item label="Tip 3" value="Tip 3" />
                         </Picker>

                    </View>

                    {/* Lokasyon Bilgileri */}
                    <View className="mb-4">
                         <Text className="text-gray-700 font-medium mb-2">Lokasyon</Text>
                         <View className="space-y-3">
                              {/* Adres Alanı */}
                              <View className="bg-white flex-row rounded-xl border border-gray-200 overflow-hidden">
                                   <TextInput
                                        className="p-4 bg-gray-100 w-[85%]"
                                        placeholder="Adress"
                                        multiline
                                        numberOfLines={4}
                                        textAlignVertical="top"
                                        value={description}
                                        onChangeText={setDescription}
                                        editable={false}
                                   />
                                   <TouchableOpacity className="bg-blue-600 items-center justify-center p-4 w-[15%]" onPress={() => { router.push("/(tabs)/map") }}>
                                        <Text className="text-white font-bold">Seç</Text>
                                   </TouchableOpacity>
                              </View>


                         </View>
                    </View>

                    {/* Görsel Yükleme */}
                    <View className="mb-6">
                         <Text className="text-gray-700 font-medium mb-2">Görsel</Text>
                         <TouchableOpacity
                              onPress={pickImage}
                              className="bg-white rounded-xl border border-gray-200 p-4 items-center justify-center"
                              style={{ height: image ? 200 : 100 }}
                         >
                              {image ? (
                                   <Image
                                        source={{ uri: image }}
                                        className="w-full h-full rounded-lg"
                                        resizeMode="cover"
                                   />
                              ) : (
                                   <View className="items-center">
                                        <Feather name="image" size={24} color="#6b7280" />
                                        <Text className="text-gray-500 mt-2">Görsel Ekle</Text>
                                   </View>
                              )}
                         </TouchableOpacity>
                    </View>

                    {/* Kaydet Butonu */}
                    <TouchableOpacity
                         onPress={handleSubmit}
                         className="bg-blue-600 rounded-xl py-4 px-6"
                    >
                         <Text className="text-white text-center font-semibold text-lg">
                              Problemi Kaydet
                         </Text>
                    </TouchableOpacity>
               </ScrollView>
          </KeyboardAvoidingView>
     );
}