import React, { FormEvent } from "react";
import api, { IurlShortned } from "../services/api";

import "./formUrl.css";

interface ICopyButton {
  id: number;
  copy: string;
}

const initialValue = { id: 0, copy: "copy" };

export default function FormUrl() {
  const [buttonCopy, setButtonCopy] = React.useState<ICopyButton>(initialValue);
  const [url, setUrl] = React.useState("");
  const [err, setErr] = React.useState(false);
  const [shortenedUrl, setShortenedUrl] = React.useState<IurlShortned[]>([]);

  async function HandleClick(e: FormEvent) {
    e.preventDefault();
    if (url) {
      setErr(false);
      const newUrl = (await api.shortenLink(url)) as IurlShortned;

      if (shortenedUrl.length === 0) {
        setShortenedUrl([newUrl]);
        return;
      }
      setShortenedUrl((oldArray) => [...oldArray, newUrl]);
      return;
    }
    setErr(true);
  }

  function HandleButtonCopy(id: number) {
    setButtonCopy({ id, copy: "copied" });
    setTimeout(() => {
      setButtonCopy(initialValue);
    }, 2000);
  }

  return (
    <>
      <form action="" className="form-content" onSubmit={(e) => HandleClick(e)}>
        <input
          onChange={(value) => setUrl(value.target.value)}
          value={url}
          type="text"
          placeholder="Shorten a link here..."
          className={err ? "err-input" : ""}
        />
        <button type="submit">Shortens It!</button>
        {err && <span className="err-message">Please add a link</span>}
      </form>

      {shortenedUrl
        .slice(0)
        .reverse()
        .map((shortned) => {
          return (
            <div key={shortned.id} className="container-url">
              <h5>
                <a
                  target="_blank"
                  href={shortned.original_link}
                  rel="noreferrer"
                >
                  {shortned.original_link}
                </a>
              </h5>
              <div className="line" />
              <h5 className="short_link">
                <a
                  target="_blank"
                  href={shortned.full_short_link}
                  rel="noreferrer"
                >
                  {shortned.full_short_link}
                </a>
              </h5>
              <button
                className={buttonCopy?.id === shortned.id ? "clicked" : ""}
                type="button"
                onClick={() => HandleButtonCopy(shortned.id)}
              >
                {buttonCopy?.id === shortned.id ? buttonCopy.copy : "Copy"}
              </button>
            </div>
          );
        })}
    </>
  );
}
