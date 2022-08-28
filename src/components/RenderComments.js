export function RenderComments(props) {
  return(
    <div className="col-12 col-md-5 mt-1">
    <h3>Comments</h3>
    <ul>
      {props.comments.map((comment) => {
        return (
          
            <li style={{ listStyle: "none" }} key={comment.id}>
              <p>{comment.comment}</p>
              <p>
                -- {comment.author},{comment.date.toLocaleString()}
              </p>
            </li>
         
        );
      })}
    </ul>
    
  
  </div>
  )
};

// {
//     comments.map((comment) => {
//       return (
//         <ul>
//           <li style={{ listStyle: "none" }} key={comment.id}>
//             <p>{comment.comment}</p>
//             <p>
//               -- {comment.author},{comment.date}
//             </p>
//           </li>
//         </ul>
//       )
//     })
 
// }
