import { useState, useEffect } from "react"
import { InputGroup, FormControl, Button } from "react-bootstrap"
import { query, collection, onSnapshot, addDoc, Timestamp, orderBy } from "firebase/firestore";
import { db } from '../../firebase' 
import { IoPersonCircleOutline } from 'react-icons/io5'
import moment from "moment";

const Home = () => {

    const [ messages, setMessages ] = useState([])
    const [ inputMessage, setInputMessage ] = useState('')

    useEffect(() => {

        let chatMessages = []
        const q = query(collection(db, 'home'), orderBy('timestamp', 'asc'))

        const unsub = onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                chatMessages = [...chatMessages, change.doc.data()]
                setMessages(chatMessages)
            })
        });

    }, [])

    const handleInput = (event) => {
        setInputMessage(event.target.value)
    }

    const handlePressEnter = (event) => {
        if(event.charCode === 13) {
            
            handleSubmit()
        }
    }

    const handleSubmit = async () => {
        setInputMessage('')
        await addDoc(collection(db, 'home'), {
            message: inputMessage,
            user: 'Test User',
            timestamp: Timestamp.fromDate(new Date())
        })
    }

    useEffect(() => {
        console.log('Messages: ', messages)
    }, [messages])

    return (
        <div className="chat-container" style={{
            display: 'flex',
            alignItems: 'end',
            flexDirection: 'column',
            height: '100%'
        }}>
            <div className="chat-text-container" style={{
                padding: '20px',
                height: '100%',
                width: '100%',
                overflow: 'auto',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexDirection: 'column'
            }}>
                {
                    messages.map((item) => {
                        var time = moment(item.timestamp.seconds * 1000).format("h:mm A");
                        return (
                            <div className="chat-message p-2" style={{display: 'block', width: '100%', display: 'flex'}}>
                                <div className="user-icon"><IoPersonCircleOutline style={{height: 'auto', width: '50px'}} /></div>
                                <div className="message">
                                    <div className="message-header" style={{display: 'flex', alignItems: 'center'}}>
                                        <div className="user-name" style={{fontSize: '14px', marginRight: '10px'}}>{ item.user }</div>
                                        <div className="message-timestamp" style={{fontSize: '10px', color: 'grey'}}>{ time }</div>
                                    </div>
                                    <div className="message-text">{item.message}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="chat-input-container" style={{
                width: '100%',
                height: '50px',
            }}>
                <InputGroup className="mb-3" style={{height: '100%'}}>
                    <FormControl
                        placeholder="Message #home"
                        aria-label="Message #home"
                        aria-describedby="basic-addon2"
                        value={inputMessage}
                        onChange={handleInput}
                        onKeyPress={handlePressEnter}
                    />
                    <Button onClick={handleSubmit} variant="outline-primary">Send</Button>
                </InputGroup>
            </div>
        </div>
    )
}

export default Home