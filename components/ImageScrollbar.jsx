import {useContext} from 'react';
import Image from 'next/image';
import {Box, Icon, Flex} from '@chakra-ui/react';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';

function LeftArrow() {
   const {scrollPrev} = useContext(VisibilityContext);
   return (
      <Flex justifyContent='center' alignItems='center' mr='1'>
         <Icon as={FaArrowAltCircleLeft} onClick={() => scrollPrev()}
            fontSize='2xl' cursor='pointer' />
      </Flex>
   )
}

function RightArrow() {
   const {scrollNext} = useContext(VisibilityContext);
   return (
      <Flex justifyContent='center' alignItems='center' mr='1'>
         <Icon as={FaArrowAltCircleRight} onClick={() => scrollNext()}
            fontSize='2xl' cursor='pointer' />
      </Flex>
   )
}

function ImageScrollbar({data}) {
   return (
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}
         style={{overflow: 'hidden'}}
      >

         {data.map(item => (
            <Box width='910px' itemID={item.id} overflow='hidden' p='1'
               key={item.id}
            >
               <Image placeholder='blur' blurDataURL={item.url} src={item.url}
                  width='1000px' height='500px' alt='property'
                  sizes='(max-width:500px) 100px, (max-width:1024px) 400px, 1000px'
               />
            </Box>
         ))}

      </ScrollMenu>
   )
}

export default ImageScrollbar;