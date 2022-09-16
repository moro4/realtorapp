import {useEffect, useState} from 'react';
import {Flex, Select, Box, Text, Input, Spinner, Icon, Button}
   from '@chakra-ui/react';
import {router} from 'next/router';
import {filterOptions} from '../utils/filterOptions';

function SearchFilters() {
   const [filters, setFilters] = useState(filterOptions);

   function searchProperties(selectedFilter) {
      const filterKey = Object.keys(selectedFilter);
      const path = router.pathname;
      const {query} = router

      if (!selectedFilter[filterKey]) {
         delete query[filterKey]
      } else {
         query[filterKey] = selectedFilter[filterKey]
      }

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