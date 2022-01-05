import React from 'react';
import Input from 'src/components/Input/Input';
import { CategoriesTop } from './CategoriesElements';
import { OptionItem, SelectWrapper } from 'src/components/Input/InputElements';

const CategoriesMenu = () => {
  return (
    <CategoriesTop>
      <h4 style={{ marginRight: '20px' }}>All</h4>
      <Input variant="icon" bg="white" />
      <SelectWrapper name="sortby" id="sortby">
        <OptionItem value="0">Newest</OptionItem>
        <OptionItem value="1">Most Popular</OptionItem>
        <OptionItem value="2">Highest Rating</OptionItem>
      </SelectWrapper>
    </CategoriesTop>
  );
};

export default CategoriesMenu;
