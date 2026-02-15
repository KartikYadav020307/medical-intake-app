import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <View className="flex-1 justify-center px-8">
          {/* Logo / Branding */}
          <View className="items-center mb-12">
            <View className="w-20 h-20 rounded-2xl bg-blue-600 items-center justify-center mb-4">
              <Text className="text-white text-3xl font-bold">M</Text>
            </View>
            <Text className="text-3xl font-bold text-gray-900">
              Medical Intake
            </Text>
            <Text className="text-base text-gray-400 mt-1">
              AI-Powered Document Summary
            </Text>
          </View>

          {/* Form Fields */}
          <View className="mb-6">
            <Text className="text-sm font-medium text-gray-700 mb-1.5">Email</Text>
            <TextInput
              className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900"
              placeholder="doctor@clinic.com"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View className="mb-8">
            <Text className="text-sm font-medium text-gray-700 mb-1.5">Password</Text>
            <TextInput
              className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900"
              placeholder="••••••••"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
            />
          </View>

          {/* Sign In Button */}
          <TouchableOpacity
            className="w-full h-14 bg-blue-600 rounded-xl items-center justify-center shadow-sm"
            activeOpacity={0.8}
            onPress={() => router.replace('/(tabs)')}
          >
            <Text className="text-white text-lg font-semibold">Sign In</Text>
          </TouchableOpacity>

          {/* Forgot Password */}
          <TouchableOpacity className="mt-4 items-center">
            <Text className="text-blue-600 text-sm font-medium">
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View className="pb-6 items-center">
          <Text className="text-xs text-gray-400">
            HIPAA Compliant · Secure Connection
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
