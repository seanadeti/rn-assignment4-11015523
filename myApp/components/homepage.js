import { SafeAreaView, StyleSheet, View, Text, Image, TextInput,ScrollView } from 'react-native';


export default function Home( {route} ) {
  const {myName, myEmail} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.credentials}>
          <Text style={styles.name}>{route.params.myName} 
          <Text style={styles.email}>{"\n"}{route.params.myEmail} </Text></Text>
          <Image source={require('../images/Ellipse.png')}
          style={{ marginRight: 20}}/>
        </View>
        <View style={styles.search}>
          <TextInput
          style={styles.searchBox}
          placeholder='Search a job or position'/>
          <Image source={require('../images/search.png')}
          style={{position: 'absolute', top: 58, marginLeft: 20}}/>
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
                <Text style={styles.text1}>$40,000 </Text>
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
            <View style={[styles.card, {backgroundColor: '#4682B4'}]}>
              <View style={styles.fb}>
                <Image source={require('../images/ug.png')}
                style={{height: 30, width: 30}}/>
              </View>
              <Text style={styles.textOne}>
                Database Administrator
                {"\n"}
                <Text style={{opacity: 0.75, fontWeight: '400'}}>University of Ghana </Text>
              </Text>  
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.text1}>$20,000 </Text>
                <Text style={[styles.text1, {marginLeft: 65}]}> Accra, Ghana</Text>
              </View> 
            </View>
            <View style={[styles.card, {backgroundColor: 'red'}]}>
              <View style={styles.fb}>
                <Image source={require('../images/yango.png')}
                style={{height: 30, width: 30}}/>
              </View>
              <Text style={styles.textOne}>
                Backend Developer
                {"\n"}
                <Text style={{opacity: 0.75, fontWeight: '400'}}>Yango </Text>
              </Text>  
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.text1}>$10,000 </Text>
                <Text style={[styles.text1, {marginLeft: 65}]}> Accra, Ghana</Text>
              </View> 
            </View>
          </ScrollView>
        </View>
        <View style={[styles.fea_job, {marginTop: 16}]}>
          <Text style={{fontWeight: '600', fontSize: 17}}> 
            Popular Jobs
          </Text>
          <Text style={{opacity: 0.4}}> See all </Text>
        </View>
        <View style={styles.jobs}>
          <Image source={require("../images/burger.png")}
          style={{position: 'absolute', margin: 20}}/>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.textTwo}>Jr Execute</Text>
            <Text style={{fontSize: 12}}>$96,000/y</Text>
          </View>
          <View style={styles.textThree}>
            <Text>Burger King</Text>
            <Text>Los Angels, US</Text>
          </View>
        </View>
        <View style={[styles.jobs, {marginTop: 5}]}>
          <Image source={require("../images/beats.png")}
          style={{position: 'absolute', margin: 20}}/>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.textTwo}>Product Manager</Text>
            <Text style={{fontSize: 12}}>$84,000/y</Text>
          </View>
          <View style={styles.textThree}>
            <Text>Beats</Text>
            <Text>Florida, US</Text>
          </View>
        </View>
        <View style={[styles.jobs, {marginTop: 5}]}>
          <Image source={require("../images/facebook.png")}
          style={{position: 'absolute', margin: 20, padding: 20}}/>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.textTwo}>Product Manager</Text>
            <Text style={{fontSize: 12}}>$86,000/y</Text>
          </View>
          <View style={styles.textThree}>
            <Text>Facebook</Text>
            <Text>Florida, US</Text>
          </View>
        </View>
        <View style={[styles.jobs, {marginTop: 5}]}>
          <Image source={require("../images/bolt.png")}
          style={{position: 'absolute', margin: 20, height: 30, width: 30, borderRadius: 10, padding: 20}}/>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.textTwo}>Driver</Text>
            <Text style={{fontSize: 12}}>$6,000/y</Text>
          </View>
          <View style={styles.textThree}>
            <Text>Bolt</Text>
            <Text>Accra, Ghana</Text>
          </View>
        </View>
        <View style={[styles.jobs, {marginTop: 5}]}>
          <Image source={require("../images/ug.png")}
          style={{position: 'absolute', margin: 20, height: 30, width: 30, borderRadius: 10, padding: 20}}/>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.textTwo}>Lecturer</Text>
            <Text style={{fontSize: 12}}>$90,000/y</Text>
          </View>
          <View style={styles.textThree}>
            <Text>University of Ghana</Text>
            <Text>Accra, Ghana</Text>
          </View>
        </View>
        <View style={[styles.jobs, {marginTop: 5}]}>
          <Image source={require("../images/calbank.jpeg")}
          style={{position: 'absolute', margin: 20, height: 30, width: 30, borderRadius: 10, padding: 20}}/>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.textTwo}>District Manager</Text>
            <Text style={{fontSize: 12}}>$60,000/y</Text>
          </View>
          <View style={styles.textThree}>
            <Text>CalBank</Text>
            <Text>Accra, Ghana</Text>
          </View>
        </View>
        <View style={[styles.jobs, {marginTop: 5}]}>
          <Image source={require("../images/yango.png")}
          style={{position: 'absolute', margin: 20, height: 30, width: 30, borderRadius: 10, padding: 20}}/>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.textTwo}>Delivery Services</Text>
            <Text style={{fontSize: 12}}>$6,000/y</Text>
          </View>
          <View style={styles.textThree}>
            <Text>Yango</Text>
            <Text>Accra, Ghana</Text>
          </View>
        </View>
        <View style={[styles.jobs, {marginTop: 5}]}>
          <Image source={require("../images/sel.png")}
          style={{position: 'absolute', margin: 20, height: 30, width: 30, borderRadius: 10, padding: 20}}/>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.textTwo}>IT Specialist</Text>
            <Text style={{fontSize: 12}}>$10,000/y</Text>
          </View>
          <View style={styles.textThree}>
            <Text>Shonicle Energy Limited</Text>
            <Text>Accra, Ghana</Text>
          </View>
        </View>
      </ScrollView>
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
    flex: 1,
    backgroundColor: '#F2F2F3',
    paddingLeft: 49,
    fontSize: 15,
    marginRight: 20
  },
  search: {
    paddingTop: 40,
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
    marginTop: 35
  },
  card: {
    backgroundColor: '#5386E4',
    width: 280,
    height: 186,
    borderRadius: 28,
    margin: 20,
    marginTop: 0,
    marginRight: 5
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
  },
  jobs: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    borderRadius: 10,
    height: 74,
    margin: 20,
    padding: 20,
    paddingLeft: 80,
    marginTop: 0
  },
  textTwo: {
    fontWeight: '600'
  },
  textThree: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingTop: 8, 
    opacity: 0.5
  }
});