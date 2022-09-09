import Link from 'next/link';
import Image from 'next/image';
import defaultImage from '../assets/images/house.webp';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

function Property({ property: { coverPhoto, price, rentFrequency, rooms,
      title, baths, area, agency, isVerified, externalID } }) {
   return (
      <Link href={`/property/${externalID}`} passHref >
         <Flex flexWrap='wrap' w='420px' p='5' pt='0' cursor='pointer'
            justifyContent='flex-start'
         >

            <Box>
               <Image src={coverPhoto ? coverPhoto.url : defaultImage}
                  alt='house' width='400' height='260' />
            </Box>

            <Box w='full'>
               <Flex pt='2' alignItems='center' justifyContent='space-between'>

                  <Flex alignItems='center'>
                     <Box pr='3' color='green.400'>
                        {isVerified && <GoVerified />}
                     </Box>
                     <Text fontWeight='bold' fontSize='lg'>
                        AED {millify(price)}
                        {rentFrequency && `/${rentFrequency}`}
                     </Text>
                  </Flex>

                  <Box>
                     <Avatar size='md' src={agency?.logo?.url} />
                  </Box>

               </Flex>

               <Flex alignItems='center' p='1' justifyContent='space-between'
                  w='250px' color='blue.400'
               >
                  {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} m²
                  <BsGridFill />
               </Flex>

               <Text fontSize='lg' pt='2'>
                  {title.length > 50 ? title.substr(0, 50) + '...' : title}
               </Text>

            </Box>

         </Flex>
      </Link>
   )
}

export default Property;