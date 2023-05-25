import { StyleSheet } from "react-native" 
import { PADDING, COLORS } from "../../outils/constantes";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical
    },
    header:{
        backgroundColor: 'white',
        elevation: 5,
        flexDirection: 'row',
        alignContent: 'center',
        padding: 10
    },
    image:{
        width: 60,
        height: 60,
        borderRadius: 60/2
    },
    userInfo:{
        marginLeft: 15
    },
    userName:{
        fontWeight: 'bold',
        marginTop: 1
    },
    userEmail :{
        marginTop: 5
    }

})

export default styles;