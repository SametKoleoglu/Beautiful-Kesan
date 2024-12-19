import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps';

// Ekran boyutlarını al
const { width, height } = Dimensions.get('window');
const GOOGLE_MAPS_API_KEY = ''; // API anahtarınızı buraya ekleyin

// Marker için tip tanımlaması
type Location = {
     latitude: number;
     longitude: number;
     address?: string;
};

export default function Map() {
     // Başlangıç konumu (örnek: Keşan)
     const [region, setRegion] = useState({
          latitude: 40.85,
          longitude: 26.633,
          latitudeDelta: 0.0100,
          longitudeDelta: 0.0421,
     });

     // Seçilen konum
     const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

     // Reverse geocoding fonksiyonu
     const getAddressFromCoordinates = async (latitude: number, longitude: number) => {
          try {
               const response = await fetch(
                    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`
               );
               const data = await response.json();

               if (data.results && data.results.length > 0) {
                    return data.results[0].formatted_address;
               }
               return 'Adres bulunamadı';
          } catch (error) {
               console.error('Geocoding hatası:', error);
               return 'Adres alınamadı';
          }
     };

     // Haritaya tıklandığında
     const handleMapPress = async (e: any) => {
          const { latitude, longitude } = e.nativeEvent.coordinate;

          // Önce koordinatları state'e kaydet
          setSelectedLocation({ latitude, longitude });

          // Ardından adresi al ve state'i güncelle
          const address = await getAddressFromCoordinates(latitude, longitude);
          setSelectedLocation(prev => prev ? { ...prev, address } : null);

          console.log("Seçilen Konum:", { latitude, longitude, address });
     };

     // Konumu kaydet
     const handleSaveLocation = () => {
          if (selectedLocation) {
               console.log("Konum kaydedildi:", selectedLocation);
          }
     };

     return (
          <View className="flex-1">
               <MapView
                    style={{
                         width: width,
                         height: height,
                    }}
                    initialRegion={region}
                    onPress={handleMapPress}
               >
                    {selectedLocation && (
                         <Marker
                              coordinate={{
                                   latitude: selectedLocation.latitude,
                                   longitude: selectedLocation.longitude,
                              }}
                              title="Seçilen Konum"
                              description={selectedLocation.address || "Adres bilgisi alınıyor..."}
                         />
                    )}
               </MapView>

               {/* Seçilen Konum Bilgisi */}
               {selectedLocation && (
                    <View className="absolute bottom-32 left-4 right-4">
                         <View className="bg-white rounded-xl p-4 shadow-lg">
                              <Text className="text-gray-700 font-medium mb-2">Seçilen Konum</Text>
                              <Text className="text-gray-500">
                                   Enlem: {selectedLocation.latitude.toFixed(6)}
                              </Text>
                              <Text className="text-gray-500">
                                   Boylam: {selectedLocation.longitude.toFixed(6)}
                              </Text>
                              {selectedLocation.address && (
                                   <Text className="text-gray-500 mt-1">
                                        Adres: {selectedLocation.address}
                                   </Text>
                              )}
                              <TouchableOpacity
                                   onPress={handleSaveLocation}
                                   className="bg-blue-600 rounded-lg py-3 mt-3"
                              >
                                   <Text className="text-white text-center font-medium">
                                        Konumu Kaydet
                                   </Text>
                              </TouchableOpacity>
                         </View>
                    </View>
               )}
          </View>
     );
} 