import { MouseEventHandler, useCallback } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { ILogoData, IMenuItem } from '../types';

export const useRenderPropsMenuItems = () => {
  const handlerRenderMenuItems = useCallback(
    (menuItem: IMenuItem, index: number) => {
      const { subLabels, label, href } = menuItem;
      if (!subLabels?.length)
        return (
          <Link key={`menu-item-${index}`} href={href}>
            <Box mx={{ base: 0, lg: 2 }}>{label}</Box>
          </Link>
        );

      return (
        <Menu key={`menu-item-${index}`}>
          <MenuButton>
            {label} <ChevronDownIcon />{' '}
          </MenuButton>
          <MenuList as='ul'>
            {menuItem.subLabels?.map(({ label, href }, index) => (
              <MenuItem as='li' key={`sub-menu-item-${index}`}>
                <Link href={href}>{label}</Link>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      );
    },
    []
  );

  const handlerRenderMobileMenuItems = useCallback(
    (menuItem: IMenuItem, index: number) => {
      const _handleClickAccordion: MouseEventHandler = (event) => {
        event.stopPropagation();
      };
      const { label, href, subLabels, isCollapsable } = menuItem;

      return (
        <MenuItem
          as={isCollapsable ? 'div' : 'button'}
          key={`nav-bar-item-${index}`}
        >
          {!isCollapsable && (
            <Link
              style={{ width: '100%' }}
              key={`nav-bar-mobile-item-${index}`}
              href={href}
            >
              {label}
            </Link>
          )}
          {isCollapsable && (
            <Accordion width='100%' allowToggle>
              <AccordionItem width='100%'>
                <AccordionButton
                  pl={0}
                  width='100%'
                  onClick={_handleClickAccordion}
                >
                  <Box as='span' flex='1' textAlign='left'>
                    {label}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  {subLabels?.map(({ label, href }, index) => (
                    <MenuItem key={`sub-label-${index}`}>
                      <Link style={{ width: '100%' }} href={href}>
                        {label}
                      </Link>
                    </MenuItem>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          )}
        </MenuItem>
      );
    },
    []
  );

  return [handlerRenderMenuItems, handlerRenderMobileMenuItems];
};
