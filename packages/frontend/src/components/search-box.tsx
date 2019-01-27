import React from "react";
interface Props {
    onChangeValue: (value: string) => void;
}
export const SearchBox: React.SFC<Props> = (props) => {
    return (
        <label htmlFor="searchTerm">
            Search
            <input
                type="searchTerm"
                name="searchTerm"
                placeholder="searchTerm"
                onChange={(e) => {
                    e.preventDefault();
                    props.onChangeValue(e.target.value);
                }}
            />
        </label>
    )
}
