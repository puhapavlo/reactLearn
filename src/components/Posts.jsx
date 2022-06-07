import React from 'react';
import useFetch from "../hooks/useFetch";

const Posts = () => {
    const post = useFetch('http://drupal/site/drupalAPI/web/api/articles');
    console.log(post);
    return (
        <div>

        </div>
    );
};

export default Posts;