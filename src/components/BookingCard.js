import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {deleteBooking} from '../redux/bookingSlice';

const STATUS_COLOR = {
  'Up Coming': '#6FCF97',
  'Completed': '#2D9CDB',
  'In Draft': '#F2C94C',
  'Canceled': '#9E9E9E',
  'Declined': '#EB5757',
};

export default function BookingCard({booking}) {
  const dispatch = useDispatch();

  const PrimaryActions = () => {
    const Btn = ({label, onPress, dim}) => (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex:1, backgroundColor: dim ? '#2a2a2a' : '#1f1f1f',
          paddingVertical:12, borderRadius:24, alignItems:'center',
          marginRight:8,
        }}>
        <Text style={{color:'#fff', fontWeight:'600'}}>{label}</Text>
      </TouchableOpacity>
    );

    if (booking.status === 'Up Coming' || booking.status === 'Completed') {
      return (
        <View style={{flexDirection:'row'}}>
          <Btn label="View Tickets" onPress={()=>{}} />
          <Btn label="View Details" onPress={()=>{}} dim />
        </View>
      );
    }
    if (booking.status === 'In Draft') {
      return (
        <View style={{flexDirection:'row'}}>
          <Btn label="Delete" onPress={()=>dispatch(deleteBooking(booking.id))} />
          <Btn label="Continue To Booking" onPress={()=>{}} dim />
        </View>
      );
    }
    // Canceled / Declined
    return <Btn label="View Details" onPress={()=>{}} dim />;
  };

  return (
    <View style={{marginTop:14}}>
      <View style={{
        backgroundColor:'#171717',
        borderRadius:18,
        padding:14,
        position:'relative',
      }}>

        <View style={{position:'absolute', left:-10, top:'50%', width:20, height:20, borderRadius:10, backgroundColor:'#0e0e0e', marginTop:-10}} />
        <View style={{position:'absolute', right:-10, top:'50%', width:20, height:20, borderRadius:10, backgroundColor:'#0e0e0e', marginTop:-10}} />


        <Text style={{color:'#6FCF97', marginBottom:8}}>Booking ID: #{booking.id}</Text>


        <View style={{flexDirection:'row'}}>
          <Image source={{uri: booking.image}} style={{width:60, height:60, borderRadius:10, marginRight:12}} />
          <View style={{flex:1}}>
            <Text style={{color:'#fff', fontSize:16, fontWeight:'700', marginBottom:4}}>{booking.title}</Text>
            <View style={{flexDirection:'row', alignItems:'center', marginBottom:2}}>
              <Icon name="calendar-outline" color="#9c9c9c" size={16} />
              <Text style={{color:'#bdbdbd', marginLeft:6}}>{booking.date}</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Icon name="location-outline" color="#9c9c9c" size={16} />
              <Text style={{color:'#bdbdbd', marginLeft:6}}>{booking.location}</Text>
            </View>
          </View>
        </View>

        <View style={{borderBottomColor:'#2a2a2a', borderBottomWidth:1, borderStyle:'dashed', marginVertical:12}} />


        <View style={{flexDirection:'row', marginBottom:12}}>
          <Text style={{color:'#9E9E9E', marginRight:6}}>Status:</Text>
          <Text style={{color: STATUS_COLOR[booking.status] || '#fff', fontWeight:'800'}}>
            {booking.status}
          </Text>
        </View>

        <PrimaryActions />
      </View>
    </View>
  );
}
