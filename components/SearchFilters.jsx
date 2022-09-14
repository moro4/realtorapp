import {useEffect, useState} from 'react';
import {Flex, Select, Box, Text, Input, Spinner, Icon, Button}
   from '@chakra-ui/react';
import {router} from 'next/router';
import {MdCancel} from 'react-icons/md';
import Image from 'next/image';
import {filterOptions, getFilterValues} from '../utils/filterOptions';
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs';

function SearchFilters() {
   const [filters, setFilters] = useState(filterOptions);

   function searchProperties(filterValues) {
      const path = router.pathname;
      const {query} = router
      const values = getFilterValues(filterValues);

      values.forEach(item => {
         query[item.name] = item.value
      });

      router.push({pathname: path, query})
   }

   return (
      <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
         {filters.map(filter => (
            <Box key={filter.queryName}>
               <Select onChange={(e) =>
                  searchProperties({[filter.queryName]: e.target.value})}
                  placeholder={filter.placeholder}
                  w='fit-content'
                  p='2'
               >
                  {filter?.items?.map(item => (
                     <option value={item.value} key={item.value}>
                        {item.name}
                     </option>
                  ))}
               </Select>
            </Box>
         ))}
      </Flex>
   )
}

export default SearchFilters;