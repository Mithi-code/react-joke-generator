import { useEffect, useState } from "react";

function useRandomJoke(firstName, lastName) {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch(
        `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
      );
      const {
        value: { joke },
      } = await response.json();
      setJoke(joke);
      localStorage.setItem("joke", JSON.stringify(joke) || null);
    };
    fetchJokes();
  }, [firstName, lastName]);

  return joke;
}

export default useRandomJoke;
