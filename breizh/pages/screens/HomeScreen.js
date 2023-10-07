import React from 'react'
import 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Animated,
    Alert, 
    Modal,
    Pressable,
    FlatList,
    Dimensions,
    ScrollView,
    SafeAreaView,
    StatusBar,
} from 'react-native'
import Selector from '../../components/svg/Selector'
import { useCallback, memo, useState, useRef, useEffect } from 'react'
import CloseCross from '../../components/svg/CloseCross'
import TransparentButton from '../../components/svg/TransparentButton'
import DetailsInfos from '../../components/svg/DetailsInfos'
import ValidateCheck from '../../components/svg/ValidateCheck'
import LockerFilled from '../../components/svg/LockerFilled'
import WhiteButton from '../../components/buttons/WhiteButton'
import LevelProgressBar from '../../components/progress-bar/LevelProgressBar'
import ModaleBottomTop from '../../components/modale/ModaleBottomTop'
import SectionKeyWords from '../../components/section/SectionKeyWords'
import SectionSelectExercice from '../../components/section/SectionSelectExercice'
  
//  Dimensions de l'écran
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const slideList = [
    {
        id: 1,
        title: `Section 1 : Randonneur`,
        level: "A1",
        unlocked: true,
        completed: 6,
        levels: 6,
        image: ``,
    },
    {
        id: 2,
        title: `Section 2 : Explorateur`,
        level: "A2",
        unlocked: true,
        completed: 7,
        levels: 7,
        image: ``,
    },
    {
        id: 3,
        title: `Section 3 : Voyageur`,
        level: "B1",
        unlocked: true,
        completed: 4,
        levels: 9,
        image: ``,
    },
    {
        id: 4,
        title: `Section 4 : Champion`,
        level: "B2",
        unlocked: false,
        completed: 0,
        levels: 6,
        image: ``,
    },
    {
        id: 5,
        title: `Section 5 : Victorieux`,
        level: "C1",
        unlocked: false,
        completed: 0,
        levels: 6,
        image: ``,
    },
    {
        id: 6,
        title: `Section 6 : Dieu vivant`,
        level: "C2",
        unlocked: false,
        completed: 0,
        levels: 6,
        image: ``,
    },
]

const Slide = memo(function Slide({ data }) {
    return (
        <View style={styles.slide}>

            <Image style={styles.slideImage}>

            </Image>

            <View style={styles.slideBox}>

                <Text style={styles.slideTitle}>{data.title}</Text>

                <TouchableOpacity style={styles.slideDetailsButton}>
                    <Text style={styles.slideDetailsText}>{data.level} - Details</Text>
                    <DetailsInfos/>
                </TouchableOpacity>

                <>

                    {data.completed===0?
                        <View style={styles.slideDetailsButton}>
                            <LockerFilled/>
                            <Text style={styles.slideDetailsText}>{data.levels} niveaux</Text>
                        </View>
                    :
                        data.completed===data.levels?
                            <View style={styles.slideDetailsButton}>
                                <ValidateCheck/>
                                <Text style={styles.slideDetailsText}>Section complétée !</Text>
                            </View>
                        :
                            data.completed!==data.levels?
                                <View style={styles.slideDetailsButton}>
                                    <LevelProgressBar used={data.completed} max={data.levels} text={null} />
                                </View>
                            :
                                null
                    }

                </>
                
                <WhiteButton text={"Travailler"}/>

            </View>

        </View>
    )
})

function Pagination({ index }) {
  return (
    <View style={styles.pagination}>
      {slideList.map((_, i) => {
        return (
          <View
            key={i}
            style={[
              styles.paginationDot,
              index === i
                ? styles.paginationDotActive
                : styles.paginationDotInactive,
            ]}
          />
        );
      })}
    </View>
  )
}

function Carousel() {

  const [index, setIndex] = useState(0)
  const indexRef = useRef(index)

  indexRef.current = index

  const onScroll = useCallback((event) => {

    const slideSize = event.nativeEvent.layoutMeasurement.width
    const index = event.nativeEvent.contentOffset.x / slideSize
    const roundIndex = Math.round(index)
    const distance = Math.abs(roundIndex - index)
    const isNoMansLand = 0.4 < distance

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex)
    }

  }, [])

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback(e => e.id, []),
    getItemLayout: useCallback(
      (_, index) => ({
        index,
        length: screenWidth,
        offset: index * screenWidth,
      }),
      []
    ),
  }

  return (

    <>
        <FlatList
            data={slideList}
            renderItem={({ item }) => {
                return <Slide data={item} />
            }}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            {...flatListOptimizationProps}
        />

        <Pagination index={index}/>

    </>

  )

}

function Sommaire() {

    const listArray1 = {
        'title':'Lire et écrire correctement des mots et phrases',
        'list':[
            {
                'q': {
                    'l1':'',
                    'l2':'',
                    'audio':'',
                },
                'r': {
                    'l1':'',
                    'l2':'',
                    'audio':'',
                },
            },
            {
                'q': {
                    'l1':'',
                    'l2':'',
                    'audio':'',
                },
                'r': {
                    'l1':'',
                    'l2':'',
                    'audio':'',
                },
            },
        ],
    }
    const listArray2 = {
        'title':"Savoir se présenter, s'introduire à quelqu'un",
        'list':[
            {
                'q': {
                    'l1':'Je suis Lucas',
                    'l2':'I am Lucas',
                    'audio':'',
                },
                'r': {
                    'l1':'Bienvenue !',
                    'l2':'Welcome !',
                    'audio':'',
                },
            },
            {
                'q': {
                    'l1':'Voilà Enguerrand.',
                    'l2':'This is Enguerrand.',
                    'audio':'',
                },
                'r': null,
            },
            {
                'q': {
                    'l1':'Je suis Fernando',
                    'l2':'I am Fernando',
                    'audio':'',
                },
                'r': {
                    'l1':'Enchanté !',
                    'l2':'Nice to meet you !',
                    'audio':'',
                },
            },
        ],
    }
    const listArray3 = {
        'title':'Parler de son travail',
        'list':[
            {
                'q': {
                    'l1':'',
                    'l2':'',
                    'audio':'',
                },
                'r': {
                    'l1':'',
                    'l2':'',
                    'audio':'',
                },
            },
            {
                'q': {
                    'l1':'',
                    'l2':'',
                    'audio':'',
                },
                'r': {
                    'l1':'',
                    'l2':'',
                    'audio':'',
                },
            },
        ],
    }

    return (

        <ScrollView showsVerticalScrollIndicator={false} style={styles.dialogBoxContainer}>

            <View style={styles.presentationProgrammeBox}>

                {/* <Image style={styles.sommaireImage} source={require("../../assets/sticker-breizh.png")}/> */}

                <View style={styles.sommaireText}>

                    <Text style={styles.sommaireTitle}>A1 - Section 1, Unité 1</Text>
                    <Text style={styles.sommaireTextDescriptif}>Les bases de la lecture et de l'écriture en breton.</Text>

                </View>

            </View>
            
            <View style={styles.sommaireContainerUnique}>

                <SectionKeyWords unit={listArray1}/>

                <SectionKeyWords unit={listArray2}/>

                <SectionKeyWords unit={listArray3}/>

            </View>

        </ScrollView>

      )
}

function HomeScreen() {

    const [openModale1,setOpenModale1] = useState(false)
    const [openModale2,setOpenModale2] = useState(false)

    return (
        
        <View style={{marginBottom:210,backgroundColor:"lightgray"}}>

            <View style={styles.topContainer}>
                
                <View style={styles.topTitleContainer}>

                    <Text style={styles.topTitle}>Deskiñ</Text>

                </View>
                
            </View>

            <View style={styles.selectLevelContainer}>

                <TouchableOpacity style={styles.infosLevel}
                    onPress={()=>setOpenModale1(!openModale1)}
                >

                    <Text style={styles.infosLevelPetit}>Section 1, Unité 1 :</Text>

                    <Text style={styles.infosLevelGros}>Les bases de la lecture et de l'écriture en breton.</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.selectLevel}
                    onPress={()=>setOpenModale2(!openModale2)}
                >
                    
                    <Selector />

                </TouchableOpacity>

            </View>
            
            <ScrollView contentContainerStyle={styles.window} showsVerticalScrollIndicator={false}>

                <SectionSelectExercice/>

            </ScrollView>

            <ModaleBottomTop
                text={"cours de Breton"}
                color={"green"}
                child={<Carousel/>}
                closeFunction={setOpenModale1}
                openValue={openModale1}
            />

            <ModaleBottomTop
                text={"Sommaire"}
                color={"purple"}
                child={<Sommaire/>}
                closeFunction={setOpenModale2}
                openValue={openModale2}
            />

        </View>

    )

}
  
const styles = StyleSheet.create({

    containerMiddle: {
        flex: 1,
        height: screenHeight,
        width: screenWidth,
        backgroundColor: "#DDDCE1",
        alignItems: "center",
        justifyContent: "center",
    },

    topContainer: {
        paddingTop: 40,
        width: screenWidth,
        backgroundColor: "#381C11",
        alignItems: "center",
        justifyContent: "center",
    },

    topTitleContainer: {
        height: 60,
        width: screenWidth,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    topTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#DDDCE1",
    },

    emojiBzh: {
        height: 22,
        width: 30,
    },

    selectLevelContainer: {
        backgroundColor: "black",
        position: "sticky",
        top: 0,
        borderRadius: 20,
        marginTop: 10,
        marginHorizontal: 10,
        height: 100,
        width: screenWidth-20,
        elevation: 2,
        gap: 4,
        flexDirection: "row",
    },

    infosLevel: {
        padding: 16,
        width: "80%",
        backgroundColor: "#381C11",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        height: "100%",
        gap: 4,
    },

    infosLevelPetit: {
        fontSize: 12.5,
        fontWeight: "bold",
        color: "#DDDCE1",
    },

    infosLevelGros: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#DDDCE1",
    },

    selectLevel: {
        width: ((screenWidth-20)/100)*20-4,
        backgroundColor: "#381C11",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },

    window: {
        width: screenWidth,
        backgroundColor: "lightgray",
        position: "relative",
    },

    // Styles de la modale

    topContainerModale: {
        paddingTop: 40,
        width: screenWidth,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: "darkgreen",
        borderBottomWidth: 4,
    },

    topTitleContainerModale: {
        height: 60,
        width: screenWidth,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },

    //  SLIDER

    carouselContainer: {
        height: screenHeight-104,
        backgroundColor: "green",
    },

    slide: {
      width: screenWidth,
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      gap: 40,
      paddingVertical: 40,
      paddingHorizontal: 20,
    },

    slideTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#DDDCE1",
    },

    slideDetailsText: {
        fontSize: 17.5,
        fontWeight: "bold",
        color: "#DDDCE1",
        textAlign: "center",
    },

    slideDetailsButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
  
    pagination: {
        height: 50,
        width: "100%",
        justifyContent: "center",
        flexDirection: "row",
        gap:8,
    },

    paginationDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
    },

    paginationDotActive: {
        backgroundColor: "darkgreen",
    },

    paginationDotInactive: {
        backgroundColor: "lightgreen",
    },

    slideImage: {
        // backgroundColor: "darkgreen",
        height: "100%",
        width: "90%",
        flex: 3,
    },

    slideBox: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: "darkgreen",
        borderRadius: 20,
        height: "100%",
        width: "90%",
        flex: 2,
        gap: 20,
        alignItems: "center",
        justifyContent: "space-between",
    },

    slideButtonBox: {
        width: "100%",
        backgroundColor: "#DDDCE1",
        padding: 16,
        borderRadius: 20,
    },

    slideButtonText: {
        fontSize: 17.5,
        fontWeight: "bold",
        color: "darkgreen",
        textAlign: "center",
    },

    dialogBoxContainer: {
        minHeight: "100%",
        flexDirection: 'column',
        gap: 20,
    },

    presentationProgrammeBox: {
        width: "100%",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        paddingTop: 10,
    },

    sommaireText: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: 20,
        gap: 10,
    },

    sommaireTitle: {
        fontSize: 17.5,
        fontWeight: "bold",
        textAlign: "center",
        color: "#DDDCE1",
    },

    sommaireTextDescriptif: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        color: "#DDDCE1",
    },

    sommaireImage: {
        height: "60%",
        width: "60%",
        objectFit: "contain",
    },

    sectionKeyWords: {
        borderBottomColor: "darkpurple",
        borderBottomWidth: 4,
    },

    sommaireContainerUnique: {
        marginBottom: 70,
    },
    
})

export default withNavigation(HomeScreen)