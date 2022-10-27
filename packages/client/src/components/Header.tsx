import { Icon, Button } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header({
  handleSubmit,
  setSearchInput,
  setQuery,
}: {
  searchInput: string | undefined;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>;
  setQuery: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  return (
    <div>
      <div className="header">
        <div>
          <h2>Green vibes only</h2>
          <div className="search-container">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="search-input"
                placeholder="Search for a product"
                onChange={(e) => setSearchInput(e.target.value)}
              ></input>
              <button className="search-button">
                <Icon as={AiOutlineSearch} boxSize={7} />
              </button>
            </form>
          </div>
          <div className="btn-group">
            <Button
              bgColor="#447761"
              size="sm"
              m={2}
              value="seeds"
              onClick={() => setQuery("search/seeds")}
            >
              Seeds
            </Button>
            <Button
              bgColor="#447761"
              size="sm"
              m={2}
              value="pot"
              onClick={() => setQuery("search/pot")}
            >
              Pots
            </Button>
            <Button
              bgColor="#447761"
              size="sm"
              m={2}
              value="plant"
              onClick={() => setQuery("search/plant")}
            >
              Plants
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
