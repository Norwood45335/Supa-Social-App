import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Stack, useRouter } from 'expo-router'
import { AuthProvider, useAuth } from '../contexts/AuthContexts'
import { supabase } from '../lib/supabase'
import { getUserData } from '../services/userService'

const _layout = ()=>{
  return (
    <AuthProvider>
      <MainLayout/>
    </AuthProvider>
  )
}

const MainLayout = () => {
  const {setAuth, setUserData} = useAuth();
  const router = useRouter();

  useEffect(()=>{
    supabase.auth.onAuthStateChange((_event, session) => {
      //console.log('session user: ', session?.user?.id);

      if(session){
        //set auth and move to homescreen
        setAuth(session?.user);
        updateUserData(session?.user, session?.user?.email);
        //console.log('auth user: ', session?.user?.email);
        router.replace('/home');
      }else{
        //set auth null and move to welcome screen
        setAuth(null);
        router.replace('/welcome');
      }
    })
  },[]); //add empty array for dependency

  const updateUserData = async (user, email)=>{
    let res = await getUserData(user?.id);
    if(res.success) setUserData({...res.data, email});
  }
  return (
    <Stack
        screenOptions={{
            headerShown: false
        }}
    >

      <Stack.Screen
        name="(main)/postDetails"
        options={{
          presentation: 'modal'
        }}
      />
    </Stack>
  )
}

export default _layout

//const styles = StyleSheet.create({})