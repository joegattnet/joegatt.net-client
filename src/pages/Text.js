import { Link } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { UserContext } from '../helpers/UserContext';
import gql from 'graphql-tag';
import React, { useEffect } from 'react';

import Text from '../components/Text';

const TEXT_QUERY = gql`
  query TextsQuery($textId: Int) {
    text(uid: $textId) {
      id
      cachedBodyHtml
      title
    }
  }
`;

export default ({ match }) => {
  const { loading, error, data, } = useQuery(TEXT_QUERY, { variables: { textId: match.params.id } });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  // let annotations = [];
  // let annotationMarks = [];
  //
  // useEffect(() => {
  //   let minimum = 0; //$('.body').offset().top
  //   // if $('#single_map:visible').length > 0 then minimum += $('#single_map').outerHeight(true)
  //   let newTop = minimum;
  //   let correctedTop = minimum;
  //   annotationMarks.forEach((annotationMark, index) => {
  //     newTop = annotationMark.offsetTop;
  //     correctedTop = (newTop <= minimum ? minimum : newTop);
  //     annotations[index].style.top = `${correctedTop}px`;
  //     minimum = correctedTop + annotations[index].offsetHeight;
  //   });
  //
  //   const reversedAnnotations = annotations.reverse();
  //   let maximum = this.annotationsContainer.offsetHeight;
  //   let newBottom;
  //
  //   reversedAnnotations.forEach((annotation, index) => {
  //     newTop = annotation.offsetTop;
  //     newBottom = newTop + annotation.offsetHeight;
  //     correctedTop = newBottom > maximum ? maximum - annotation.offsetHeight : newTop;
  //     annotations[index].style.top = `${correctedTop}px`;
  //     maximum = correctedTop;
  //   });
  // });

  return (
    <article>
      <header>
        <h1>{ data.text.title }</h1>
      </header>
       <Text>
         <section dangerouslySetInnerHTML={{ __html: data.text.cachedBodyHtml }} />

         {/* <section id="annotations" className="side-annotations" ref={(annotationsContainer) => { this.annotationsContainer = annotationsContainer; }}>
           <header>
             <h3>Annotations</h3>
           </header>
           <ol>
             <li id="annotation-1" ref={(annotation) => { this.annotations[0] = annotation; }}>
               <a href="#annotation-mark-1">1</a>Blau’s statement is available
               <a href="http://hkw.de/de/app/mediathek/video/26489">here</a>, starting at 73:30
             </li>
             <li id="annotation-2" ref={(annotation) => { this.annotations[1] = annotation; }}>
               <a href="#annotation-mark-2">2</a>See also,
               <a href="https://www.youtube.com/watch?v=eEx1apBAS9A">lecture</a> delivered at Harvard GSD.
             </li>
             <li id="annotation-3" ref={(annotation) => { this.annotations[2] = annotation; }}>
               <a href="#annotation-mark-3">3</a>See, for instance, The Role of the Reader
             </li>
             <li id="annotation-4" ref={(annotation) => { this.annotations[3] = annotation; }}>
               <a href="#annotation-mark-4">4</a>Bergson’s and Popper’s “open society” is yet another tangent which can be contrasted with these other uses of the word.
             </li>
             <li id="annotation-5" ref={(annotation) => { this.annotations[4] = annotation; }}>
               <a href="#annotation-mark-5">5</a>Bergson’s and Popper’s “open society” is yet another tangent which can be contrasted with these other uses of the word. Bergson’s and Popper’s “open society” is yet another tangent which can be contrasted with these other uses of the word. Bergson’s and Popper’s “open society” is yet another tangent which can be contrasted with these other uses of the word.
             </li>
           </ol>
         </section> */}
       </Text>
    </article>
  );
}
