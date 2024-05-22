import { Layout, Text } from "@ui-kitten/components"
import { StyleSheet } from "react-native"

//props
export interface Props {
    text: string
    isViewAll?: boolean
}

export const HomeHeading = ({text,isViewAll=false}:Props) => {
  return (
    <Layout style={styles.container}>
        <Text category="h5" style={styles.heading}>{text}</Text>
        {isViewAll && <Text category="s1" >Ver todo</Text>}
    </Layout>
  )
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    heading:{
        marginBottom: 10
    }
})