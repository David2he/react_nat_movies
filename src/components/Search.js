import React, { Component } from "react"
import { Text, View, Button, StyleSheet, TextInput } from "react-native"
import { find_genres, searchMovie } from "../components/api/Movie_search"

export default class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			datas: [],
			take_text: "",
		}
	}

	setData = () => {
		find_genres().then((data) => {
			this.setState({ datas: data })
			this.data_test = this.state.datas.genres
			this.testouille()
		}),
			searchMovie(this.state.take_text).then((data) => {
				this.setState({ datas: data })
				this.data_find = this.state.datas
				console.log(this.data_find)
			})
	}
	testouille = () => {
		// console.log(this.data_test)
		// console.log(this.state.take_text)
		for ([this.i, this.element] of this.state.datas.genres.entries()) {
			if (
				this.element.name.toLowerCase() === this.state.take_text.toLowerCase()
			) {
				console.log("test")
			}
		}
	}
	render() {
		const onChangeText = (text) => {
			this.setState({ take_text: text })
			this.setData()
            
		}
		return (
			<View style={styles.main_container}>
				<View style={styles.input_container}>
					<TextInput
						style={styles.textinput}
						placeholder="test"
						onChangeText={onChangeText}
					/>
				</View>
				<Text style={styles.text}>{this.state.take_text}</Text>
				<Button
					style={styles.button}
					title="Rechercher"
					onPress={this.setData}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	main_container: {
		width: "60%",
		padding: 30,
		backgroundColor: "#fd4556",
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
	},
	input_container: {
		flexDirection: "row",
		backgroundColor: "#ffFf",
		borderRadius: 15,
		paddingLeft: 10,
		marginBottom: 10,
	},
	picto: {
		width: 25,
		height: 25,
	},
	textinput: {
		height: 50,
		paddingLeft: 10,
		width: "100%",
	},
	text: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",

		backgroundColor: "white",

		padding: 15,
		paddingLeft: 10,
		marginBottom: 10,
		borderRadius: 15,
	},
})
