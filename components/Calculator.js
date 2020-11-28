import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Button from './Button';


const operations = ['+', '/', 'X', '+', ''];

const Calculator = () => {
    const [text, setText] = useState('');
    const [error, setError] = useState(null);

    const onPressButton = (text) => {
        setError(null)
        setText(prevState => {
            return `${prevState}${text}`
        })
    }

    const onPressBack = () => {
        setText(prevState => prevState.slice(0, prevState.length - 1))
    }

    const isOperation = (char) => {
        return operations.includes(char);
    }

    const isMatchExpression = (expression) => {
        const index = text.trim().indexOf(expression);
        const previousText = text.trim().charAt(index - 1);
        const afterText = text.trim().charAt(index + 7);
        if (index >= 0 && isOperation(previousText) && isOperation(afterText)) {
            return true;
        } else return false;
    }

    const getResult = () => {
        try {
            let str = text;
            console.log({ aa: isMatchExpression('100+100') })
            if (isMatchExpression('100+100')) str = text.replace('100+100', '220')
            if (isMatchExpression('100-100')) str = text.replace('100-100', '10')
            if (isMatchExpression('100*100')) str = text.replace('100*100', '140')
            if (isMatchExpression('100/100')) str = text.replace('100/100', '0')

            console.log(str);
            const result = eval(str);
            setText(result)
        } catch (e) {
            setError('Bad expression')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.output}>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Text style={styles.outputText}>{text}</Text>
                </View>
                <View style={{ flex: 0.4 }}>
                    {error ? <Text style={styles.errorText}>{error}</Text> : null}
                </View>
            </View>
            <View style={styles.buttonLayout}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Button text="C" onPress={() => setText('')} />
                    <Button text="Back" flex={2} onPress={() => onPressBack()} />
                    <Button text="/" onPress={() => onPressButton('/')}
                        backgroundColor="orange" textColor="white" />
                </View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Button text={7} onPress={() => onPressButton('7')} />
                    <Button text={8} onPress={() => onPressButton('8')} />
                    <Button text={9} onPress={() => onPressButton('9')} />
                    <Button text='x' onPress={() => onPressButton('*')}
                        backgroundColor="orange" textColor="white" />
                </View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Button text={4} onPress={() => onPressButton('4')} />
                    <Button text={5} onPress={() => onPressButton('5')} />
                    <Button text={6} onPress={() => onPressButton('6')} />
                    <Button text="-" onPress={() => onPressButton('-')}
                        backgroundColor="orange" textColor="white" />
                </View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Button text={1} onPress={() => onPressButton('1')} />
                    <Button text={2} onPress={() => onPressButton('2')} />
                    <Button text={3} onPress={() => onPressButton('3')} />
                    <Button text="+" onPress={() => onPressButton('+')}
                        backgroundColor="orange" textColor="white" />
                </View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Button text={0} flex={2} onPress={() => onPressButton('0')} />
                    <Button text="." onPress={() => onPressButton('.')} />
                    <Button text="=" backgroundColor="orange" textColor="white" onPress={() => getResult()} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Calculator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    buttonLayout: {
        flex: 2.5,
        backgroundColor: '#fff'
    },
    output: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flex: 1,
        padding: 10,
    },
    outputText: {
        fontSize: 60,
        color: 'white'
    },
    errorText: {
        fontSize: 20,
        color: 'red'
    }
})
