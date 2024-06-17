import { SafeAreaView, StyleSheet, View, Text, Image, TextInput } from 'react-native';


export default function Home( {route} ) {
  const {myName, myEmail} = route.params;
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.credentials}>
          <Text style={styles.name}> {route.params.myName} </Text>
          <Text style={styles.email}> {route.params.myEmail} </Text>
          <Image source={require('../images/Ellipse.png')}
          style={{ left: 330, position: 'absolute', top: 40 }}/>
        </View>
        <View style={styles.search}>
          <TextInput
          style={styles.searchBox}
          placeholder='Search a job or position'/>
          <Image source={require('../images/search.png')}
          style={{position: 'absolute', top: 67, marginLeft: 20}}/>
          <View style={styles.filter}>
            <Image source={require('../images/filter.png')}/>
          </View>
        </View>
        <View style={styles.fea_job}>
          <Text style={{fontWeight: '600', fontSize: 17}}> 
            Featured Jobs 
          </Text>
          <Text style={{opacity: 0.4}}> See all </Text>
        </View>
        <View>
          
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  name: {
    fontWeight: '700',
    fontSize: 24,
  },
  email: {
    color: '#95969D',
    fontSize: 20,
    fontWeight: '400'
  },
  credentials: {
    paddingTop: 40,
    marginLeft: 20,
  }, 
  searchBox: {
    borderRadius: 18,
    height: 55,
    width: 310,
    backgroundColor: '#F2F2F3',
    paddingLeft: 49,
    fontSize: 15,
  },
  search: {
    paddingTop: 50,
    marginLeft: 20,
    flexDirection: 'row'
  },
  filter:{
    backgroundColor: '#F2F2F3',
    left: 20,
    borderRadius: 15,
    padding: 15,
  },
  fea_job: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 25,
    marginTop: 55
  }
});