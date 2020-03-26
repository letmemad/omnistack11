import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },

    headerText: {
        fontSize: 15,
        color: '#737380'
    },

    title: {
        marginTop: 50,
        marginBottom: 16,
        fontWeight: "bold",
        fontSize: 30,
        color: '#060719'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: "#737380",
    },

    incidentList: {
        marginTop: 32,
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    incidentProperty: {
        fontSize: 14,
        color: "#41414d",
        fontWeight: "bold",
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    datailsButtonText: {
        color: '#e02041',
        fontWeight: "bold",
        fontSize: 15
    },
})