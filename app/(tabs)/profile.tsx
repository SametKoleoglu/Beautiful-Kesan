import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons";

// Örnek kullanıcı verisi
const user = {
     firstname: "Ahmet",
     lastname: "Yılmaz",
     email: "ahmet.yilmaz@email.com",
     phone: "+90 555 123 4567",
     address: "Cumhuriyet Mah. 156. Sokak No:4 D:5 Çankaya/Ankara",
};

const ProfileItem = ({ icon, visibleIcon = true, title, value }: { icon: string, title: string, value: string, visibleIcon?: boolean }) => (
     <View className="flex-row items-center p-4 bg-white rounded-xl mb-3">
          <View className="w-8 h-8 bg-blue-50 rounded-full items-center justify-center">
               <Feather name={icon as any} size={18} color="#2563eb" />
          </View>
          <View className="ml-3 flex-1">
               <Text className="text-gray-500 text-sm">{title}</Text>
               <Text className="text-gray-700 font-medium mt-1">{value}</Text>
          </View>
          <TouchableOpacity>
               {
                    visibleIcon &&
                    <Feather name="edit-2" size={18} color="#6b7280" />
               }
          </TouchableOpacity>
     </View>
);

export default function Profile() {
     return (
          <View className="flex-1 bg-gray-50">
               <ScrollView className="flex-1 px-4 py-6" >
                    {/* Profil Fotoğrafı ve İsim */}

                    {/* Profil Bilgileri */}
                    <View className="mb-6">
                         <Text className="text-lg font-semibold text-gray-800 mb-4">Kişisel Bilgiler</Text>
                         <ProfileItem
                              icon="user"
                              title="Ad Soyad"
                              visibleIcon={false}
                              value={user.firstname + " " + user.lastname}
                         />
                         <ProfileItem
                              icon="mail"
                              title="E-posta"
                              value={user.email}
                         />
                         <ProfileItem
                              icon="phone"
                              title="Telefon"
                              value={user.phone}
                         />
                         <ProfileItem
                              icon="map-pin"
                              title="Adres"
                              value={user.address}
                         />
                    </View>

                    {/* Çıkış Yap Butonu */}
                    <TouchableOpacity className="flex-row items-center justify-center p-4 bg-red-50 rounded-xl mb-6">
                         <Feather name="log-out" size={18} color="#ef4444" />
                         <Text className="ml-2 text-red-500 font-medium">Çıkış Yap</Text>
                    </TouchableOpacity>
               </ScrollView>
          </View>
     )
} 