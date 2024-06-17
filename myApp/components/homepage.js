import { SafeAreaView, StyleSheet, View, Text, Image, TextInput,ScrollView } from 'react-native';


export default function Home( {route} ) {
  const {myName, myEmail} = route.params;
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.credentials}>
          <Text style={styles.name}> {route.params.myName} 
          <Text style={styles.email}> {"\n"}{route.params.myEmail} </Text></Text>
          <Image source={require('../images/Ellipse.png')}
          style={{ marginRight: 20}}/>
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
        <View style={{flexDirection: 'row'}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.card}>
              <View style={styles.fb}>
                <Image source={require('../images/facebook.png')}/>
              </View>
              <Text style={styles.textOne}>
                Software Engineer 
                {"\n"}
                <Text style={{opacity: 0.75, fontWeight: '400'}}>Facebook </Text>
              </Text>  
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.text1}>$180,00 </Text>
                <Text style={[styles.text1, {marginLeft: 65}]}> Accra, Ghana</Text>
              </View> 
            </View>
            <View style={[styles.card, {backgroundColor: '#00008B'}]}>
              <View style={styles.fb}>
                <Image source={require('../images/google.png')}/>
              </View>
              <Text style={styles.textOne}>
                Python Developer 
                {"\n"}
                <Text style={{opacity: 0.75, fontWeight: '400'}}>Google </Text>
              </Text>  
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.text1}>$260,000 </Text>
                <Text style={[styles.text1, {marginLeft: 65}]}> Accra, Ghana</Text>
              </View> 
            </View>
            <View style={[styles.card, {backgroundColor: '#8B0000'}]}>
              <View style={styles.fb}>
                <Image source={require('../images/netflix.png')}
                style={{height: 30, width: 30}}/>
              </View>
              <Text style={styles.textOne}>
                Data Analyst 
                {"\n"}
                <Text style={{opacity: 0.75, fontWeight: '400'}}>Netflix </Text>
              </Text>  
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.text1}>$360,000 </Text>
                <Text style={[styles.text1, {marginLeft: 65}]}> Accra, Ghana</Text>
              </View> 
            </View>
            <View style={[styles.card, {backgroundColor: 'green'}]}>
              <View style={styles.fb}>
                <Image source={require('../images/bolt.png')}
                style={{height: 30, width: 30}}/>
              </View>
              <Text style={styles.textOne}>
                Frontend Developer 
                {"\n"}
                <Text style={{opacity: 0.75, fontWeight: '400'}}>Bolt </Text>
              </Text>  
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.text1}>$90,000 </Text>
                <Text style={[styles.text1, {marginLeft: 65}]}> Accra, Ghana</Text>
              </View> 
            </View>
            <View style={[styles.card, {backgroundColor: '#696969'}]}>
              <View style={styles.fb}>
                <Image source={require('../images/openai.png')}
                style={{height: 30, width: 30}}/>
              </View>
              <Text style={styles.textOne}>
                AI Engineer 
                {"\n"}
                <Text style={{opacity: 0.75, fontWeight: '400'}}>OpenAI </Text>
              </Text>  
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.text1}>$300,000 </Text>
                <Text style={[styles.text1, {marginLeft: 65}]}> Accra, Ghana</Text>
              </View> 
            </View>
            <View style={[styles.card, {backgroundColor: 'black'}]}>
              <View style={styles.fb}>
                <Image source={require('../images/apple.png')}/>
              </View>
              <Text style={styles.textOne}>
                Software Engineer 
                {"\n"}
                <Text style={{opacity: 0.75, fontWeight: '400'}}>OpenAI </Text>
              </Text>  
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.text1}>$150,000 </Text>
                <Text style={[styles.text1, {marginLeft: 65}]}> Accra, Ghana</Text>
              </View> 
            </View>
          </ScrollView>
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
    flexDirection: 'row',
    justifyContent: 'space-between',

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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  filter:{
    backgroundColor: '#F2F2F3',
    marginRight: 20,
    borderRadius: 15,
    padding: 15,
  },
  fea_job: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 25,
    marginTop: 55
  },
  card: {
    backgroundColor: '#5386E4',
    width: 280,
    height: 186,
    borderRadius: 28,
    margin: 20,
    marginTop: 0
  },
  textOne: {
    color: '#ffff', 
    fontWeight: '600',
    fontSize: 16,
    padding: 30,
    left: 45,
    paddingBottom: 0,
    marginLeft: 10
  },
  fb: {
    backgroundColor: '#ffff',
    position: 'absolute',
    borderRadius: 10,
    padding: 8,
    margin: 20,
    marginTop: 27,
  },
  text1: {
    color: '#ffff',
    margin: 20,
    marginTop: 75,
    fontWeight: '500'
  }
});