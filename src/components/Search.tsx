import {
  Navbar,
  Typography,
  Input,
  Select,
  Option,
  IconButton,
} from "@material-tailwind/react";
import React, { Dispatch, useContext, useState } from "react";
import ProductContext from "./ProductContext";
import { FaTimes, FaSearch } from "react-icons/fa";
import { ICotegory } from "../interface";

const Search = (props: {
  searchKey: string | undefined;
  setSearchKey: Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const { category, setFilter } = useContext(ProductContext);
  const { setSearchKey } = props;
  const [isSearch, setSearch] = useState(false);
  const [searchStr, setSearchStr] = useState<string | undefined>(undefined);
  const [isApplyFilter, setApplyFilter] = useState(false);
  const [addFilter, setAddFilter] = useState<string | undefined>(undefined);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.target.value);
  };

  const searchResult = () => {
    if (!isSearch) {
      setSearchKey(searchStr);
      setSearch(true);
    } else {
      setSearchKey(searchStr);
      setSearch(true);
    }

    if (isSearch) {
      setSearchKey("");
      setSearchStr("");
      setSearch(false);
    }
  };

  const returnButton = () => {
    if (addFilter && !isApplyFilter) {
      return (
        <IconButton
          onClick={() => {
            setApplyFilter(true);
            setFilter(addFilter);
          }}
        >
          Apply
        </IconButton>
      );
    }
    if (addFilter && isApplyFilter) {
      return (
        <IconButton
          onClick={() => {
            setApplyFilter(false);
            setAddFilter("");
            setFilter("");
          }}
        >
          reset
        </IconButton>
      );
    }
    return null;
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      searchResult();
    }
  };

  return (
    <Navbar className=" border-0  bg-transparent bg-gradient-to-b from-black from-70% to-transparent fixed  inset-0 z-10 h-max max-w-full rounded-none pt-2 pb-3 py-2 px-4 lg:px-8 lg:pb-7 lg:pt-4">
      <div className="flex items-center justify-between">
        <span className="flex items-center">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 px-6 text-[20px] sm:text-[20px] md:text-[30px] lg:text-[32px] xl:text-[34px]"
          >
            Product
          </Typography>
        </span>

        <div className="flex flex-row w-2/4 gap-6">
          <div className="flex flex-row  w-2/5 gap-6">
            <Input
              placeholder="Search"
              className="text-white"
              label="Search"
              value={searchStr}
              onKeyDown={handleKeyDown}
              onChange={searchHandler}
              icon={
                isSearch ? (
                  <FaTimes className=" cursor-pointer" onClick={searchResult} />
                ) : (
                  <FaSearch
                    className=" cursor-pointer"
                    onClick={searchResult}
                  />
                )
              }
            />
          </div>
          <div className=" w-2/5">
            <Select
              label="Select filter"
              placeholder="Select filter"
              className=" text-white "
              value={addFilter}
              onChange={(category: string | undefined) => {
                setAddFilter(category ? category : "");
                setApplyFilter(false);
              }}
            >
              {category.map((_category: ICotegory, index: number) => (
                <Option key={index} value={_category._id}>
                  {_category.name}
                </Option>
              ))}
            </Select>
          </div>

          {returnButton()}
        </div>
      </div>
    </Navbar>
  );
};

export default Search;
