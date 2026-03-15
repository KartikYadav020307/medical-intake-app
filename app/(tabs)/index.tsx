import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const RECENT_UPLOADS = [
  { id: '1', name: 'Blood Report', date: 'Jan 20, 2026', status: 'Analyzed' },
  { id: '2', name: 'Prescription', date: 'Jan 15, 2026', status: 'Analyzed' },
  { id: '3', name: 'MRI Scan Report', date: 'Jan 10, 2026', status: 'Pending' },
  { id: '4', name: 'Allergy Panel', date: 'Dec 28, 2025', status: 'Analyzed' },
];

function StatusBadge({ status }: { status: string }) {
  const isAnalyzed = status === 'Analyzed';
  return (
    <View
      className={`px-2.5 py-1 rounded-full ${
        isAnalyzed ? 'bg-green-50' : 'bg-amber-50'
      }`}
    >
      <Text
        className={`text-xs font-medium ${
          isAnalyzed ? 'text-green-700' : 'text-amber-700'
        }`}
      >
        {status}
      </Text>
    </View>
  );
}

export default function DashboardScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
      {/* Header */}
      <View className="px-6 pt-4 pb-2">
        <Text className="text-sm text-gray-400 font-medium">Welcome back,</Text>
        <Text className="text-2xl font-bold text-gray-900">Dr. Smith</Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Upload Card */}
        <View className="mx-6 mt-4 p-6 bg-blue-600 rounded-2xl shadow-lg">
          <Text className="text-white text-lg font-semibold mb-1">
            New Patient Document
          </Text>
          <Text className="text-blue-200 text-sm mb-5">
            Upload medical records for AI-powered analysis
          </Text>
          <TouchableOpacity
            className="w-full h-14 bg-white rounded-xl items-center justify-center flex-row"
            activeOpacity={0.8}
          >
            <Text className="text-2xl mr-2">📄</Text>
            <Text className="text-blue-600 text-base font-semibold">
              Upload Document
            </Text>
          </TouchableOpacity>
        </View>

        {/* Stats Row */}
        <View className="flex-row mx-6 mt-5 gap-3">
          <View className="flex-1 bg-white p-4 rounded-2xl border border-gray-100">
            <Text className="text-2xl font-bold text-gray-900">12</Text>
            <Text className="text-xs text-gray-400 mt-0.5">Total Uploads</Text>
          </View>
          <View className="flex-1 bg-white p-4 rounded-2xl border border-gray-100">
            <Text className="text-2xl font-bold text-green-600">10</Text>
            <Text className="text-xs text-gray-400 mt-0.5">Analyzed</Text>
          </View>
          <View className="flex-1 bg-white p-4 rounded-2xl border border-gray-100">
            <Text className="text-2xl font-bold text-amber-500">2</Text>
            <Text className="text-xs text-gray-400 mt-0.5">Pending</Text>
          </View>
        </View>

        {/* Recent Uploads */}
        <View className="mx-6 mt-6 mb-4">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-lg font-semibold text-gray-900">
              Recent Uploads
            </Text>
            <TouchableOpacity>
              <Text className="text-sm text-blue-600 font-medium">See All</Text>
            </TouchableOpacity>
          </View>

          {RECENT_UPLOADS.map((upload) => (
            <TouchableOpacity
              key={upload.id}
              className="bg-white p-4 rounded-2xl border border-gray-100 mb-3 flex-row items-center"
              activeOpacity={0.7}
              onPress={() => router.push('/summary')}
            >
              <View className="w-11 h-11 rounded-xl bg-blue-50 items-center justify-center mr-3">
                <Text className="text-xl">📋</Text>
              </View>
              <View className="flex-1">
                <Text className="text-base font-medium text-gray-900">
                  {upload.name}
                </Text>
                <Text className="text-xs text-gray-400 mt-0.5">{upload.date}</Text>
              </View>
              <StatusBadge status={upload.status} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

