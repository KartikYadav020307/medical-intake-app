import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SectionCardProps {
  icon: string;
  title: string;
  accentColor: string;
  bgColor: string;
  children: React.ReactNode;
}

function SectionCard({ icon, title, accentColor, bgColor, children }: SectionCardProps) {
  return (
    <View className="bg-white rounded-2xl border border-gray-100 mb-4 overflow-hidden">
      {/* Card Header */}
      <View className={`flex-row items-center px-5 py-3.5 ${bgColor}`}>
        <Text className="text-lg mr-2">{icon}</Text>
        <Text className={`text-base font-semibold ${accentColor}`}>{title}</Text>
      </View>
      {/* Card Body */}
      <View className="px-5 py-4">{children}</View>
    </View>
  );
}

function BulletItem({ text, className = '' }: { text: string; className?: string }) {
  return (
    <View className={`flex-row items-start mb-2 ${className}`}>
      <Text className="text-gray-300 mr-2 mt-0.5">•</Text>
      <Text className="text-sm text-gray-700 flex-1 leading-5">{text}</Text>
    </View>
  );
}

function RedFlagItem({ text }: { text: string }) {
  return (
    <View className="flex-row items-start bg-red-50 rounded-xl px-4 py-3 mb-2">
      <Text className="mr-2">⚠️</Text>
      <Text className="text-sm text-red-700 flex-1 leading-5 font-medium">{text}</Text>
    </View>
  );
}

export default function SummaryScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center px-6 pt-4 pb-3 border-b border-gray-100 bg-white">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center mr-3"
        >
          <Text className="text-lg text-gray-600">←</Text>
        </TouchableOpacity>
        <View className="flex-1">
          <Text className="text-lg font-bold text-gray-900">Blood Report</Text>
          <Text className="text-xs text-gray-400">Analyzed · Jan 20, 2026</Text>
        </View>
        <TouchableOpacity className="w-10 h-10 rounded-full bg-blue-50 items-center justify-center">
          <Text className="text-lg">📤</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-6 pt-4" showsVerticalScrollIndicator={false}>
        {/* Patient Info Banner */}
        <View className="bg-blue-600 rounded-2xl p-5 mb-5">
          <View className="flex-row justify-between items-start">
            <View>
              <Text className="text-blue-200 text-xs font-medium mb-1">PATIENT</Text>
              <Text className="text-white text-lg font-bold">Jane Doe</Text>
              <Text className="text-blue-200 text-sm mt-0.5">Female · 34 years · ID #4821</Text>
            </View>
            <View className="bg-white/20 px-3 py-1.5 rounded-full">
              <Text className="text-white text-xs font-semibold">Reviewed</Text>
            </View>
          </View>
        </View>

        {/* Diagnosis Section */}
        <SectionCard
          icon="🩺"
          title="Diagnosis"
          accentColor="text-blue-700"
          bgColor="bg-blue-50"
        >
          <BulletItem text="Vitamin D deficiency (serum level: 12 ng/mL)" />
          <BulletItem text="Mild iron-deficiency anemia (Hb: 10.8 g/dL)" />
          <BulletItem text="Elevated LDL cholesterol (168 mg/dL)" />
        </SectionCard>

        {/* Medications Section */}
        <SectionCard
          icon="💊"
          title="Medications"
          accentColor="text-emerald-700"
          bgColor="bg-emerald-50"
        >
          <View className="bg-gray-50 rounded-xl px-4 py-3 mb-2">
            <Text className="text-sm font-semibold text-gray-900">Vitamin D3 60,000 IU</Text>
            <Text className="text-xs text-gray-500 mt-0.5">Once weekly · 8 weeks</Text>
          </View>
          <View className="bg-gray-50 rounded-xl px-4 py-3 mb-2">
            <Text className="text-sm font-semibold text-gray-900">Ferrous Sulfate 325 mg</Text>
            <Text className="text-xs text-gray-500 mt-0.5">Once daily · 3 months</Text>
          </View>
          <View className="bg-gray-50 rounded-xl px-4 py-3">
            <Text className="text-sm font-semibold text-gray-900">Atorvastatin 10 mg</Text>
            <Text className="text-xs text-gray-500 mt-0.5">Once daily at bedtime · Ongoing</Text>
          </View>
        </SectionCard>

        {/* Red Flags Section */}
        <SectionCard
          icon="🚩"
          title="Red Flags"
          accentColor="text-red-700"
          bgColor="bg-red-50"
        >
          <RedFlagItem text="Vitamin D critically low — risk of osteomalacia. Recheck in 8 weeks." />
          <RedFlagItem text="LDL above threshold for cardiovascular risk. Lifestyle counseling recommended." />
        </SectionCard>

        {/* Action Buttons */}
        <View className="flex-row gap-3 mt-2 mb-8">
          <TouchableOpacity
            className="flex-1 h-12 bg-blue-600 rounded-xl items-center justify-center"
            activeOpacity={0.8}
          >
            <Text className="text-white text-sm font-semibold">Approve & Send</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-1 h-12 bg-white border border-gray-200 rounded-xl items-center justify-center"
            activeOpacity={0.8}
          >
            <Text className="text-gray-700 text-sm font-semibold">Edit Summary</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
