import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
   
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';


  import style from "./signup.module.css"
  import { useState } from 'react';
 import { useNavigate } from 'react-router-dom';

  
  export default function SimpleCard() {

    const [user, setUser] = useState({})
    const navigate = useNavigate()
    
     const handlechange = (e) => {
        let {name, value} = e.target
        setUser( {
            ...user,
            [name] : value
        })
    }
    
     const handleSubmit = () => {
        let payload = JSON.stringify(user)
        fetch("https://evening-castle-55317.herokuapp.com/auth/signup", {
            headers : {
                "Content-Type" : "application/json"
            },
            method : 'POST',
            body : payload
        })
        .then((res) => res.json())
        .then((res) => navigate('/welcome'))
        .catch((err) => console.log(err))
    }

    // *****************************************************//
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
       >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'5xl'} color={"grey"}>Sign up to Timely</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
            Already have an account? <Link color={'green.400'}> Log In</Link> ✌️
            </Text>
          </Stack>
          <Box 
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'lg'}
            p={10}>
            <Stack spacing={4}>
            <FormControl id="none">
                
            <button className={style.buttn}><img src="https://d1vbcromo72rmd.cloudfront.net/assets/google_signin-6602e1ab80424c019aaf360ab651d857464162176c58eb0b2f64b503b99c16b7.svg" alt="jsj"/> <div>Sign up with Google</div></button>
              </FormControl>
              <FormControl id="none">
                
                <button className={style.buttn}><img src="https://d1vbcromo72rmd.cloudfront.net/assets/left-black-logo-large-be9b8d1a6be1718debaab0c55cd606338e2724b4ca71f2d0266f9d3df13fc996.svg" alt="jsj"/><div>Sign up with Apple</div></button>
                
                  </FormControl>        
              <FormControl id="name">
                <FormLabel> Full Name</FormLabel>
                <Input type="text" name="name" onChange={handlechange}  isRequired="true" />
              </FormControl>
              <FormControl id="email" >
                <FormLabel> Work Email</FormLabel>
                <Input type="email" name="email" onChange={ handlechange}  />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" onChange={handlechange}  isRequired="true"/>
              </FormControl>
              <Stack spacing={10}>
              <Stack align={'center'}>
         
            <Text fontSize={'lg'} color={'gray.600'}>
            By signing up you agree to the <Link color={'green.400'}> Terms of Service.</Link> 
            </Text>
          </Stack>
                <Button  onClick={handleSubmit}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'green.500',
                  }}>
                  Start free 14-day trial
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }