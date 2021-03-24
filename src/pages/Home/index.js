import React, { useState, useEffect } from "react";
import Container from "../../../../../../Pristine/du-den-fsf-ft-01-2021-u-c/20-State/woah/src/components/Container";

function Home() {
  return (
    // <ArticleContext.Provider value={articleState}>
    //   <div>
    //     <Container style={{ minHeight: "100vh" }}>
    //       <h1 className="text-center">Search For Anything on Wikipedia</h1>
    //       <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
    //         {error}
    //       </Alert>
    //       <SearchForm
    //         handleFormSubmit={handleFormSubmit}
    //         handleInputChange={handleInputChange}
    //         results={search}
    //       />
    //       <SearchResults />
    //     </Container>
    //   </div>
    // </ArticleContext.Provider>

    <Container>
      <div class="row">
        <div class="col-sm-6 mt-4 mb-2 bg-white rounded">
          <h1>I'm Pierce Gladfelter.</h1>
          <p>
            Come with me on this quest of self discovery through the world of
            programming! hopfully one day I can use these skills to make an
            impact on the world!
          </p>

          <a class="blockquote text-left" href="about-me.html">
            Get to Know Me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-up-right-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803L10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
            </svg>
          </a>
        </div>
      </div>
    </Container>
  );
}
export default Home;
