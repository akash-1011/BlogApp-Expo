import createDataContext from './createDataContext';
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogPost':
            return action.payload;
        // case 'add_blogPost':
        //     return [...state,
        //         {
        //             id: Math.floor(Math.random()*99999),
        //             title: action.payload.title,
        //             content: action.payload.content
        //         }
        //     ];
        case 'delete_blogPost':
            return state.filter((blogpost) => blogpost.id !== action.payload);
        case 'edit_blogPost':
            return state.map((blogpost) => {
                if(blogpost.id === action.payload.id) {
                    return action.payload;
                } else {
                    return blogpost;
                }
            });
    
        default:
            return state;
    }
};

const getBlogPost = dispatch => {
    return async () => {
        const res = await jsonServer.get('/blogposts');
        dispatch({ type: 'get_blogPost', payload: res.data });
    };
};

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', {title,content});
        //dispatch({ type: 'add_blogPost', payload: {title, content} });
        if(callback){
            callback();
        }
    }
};

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({ type: 'delete_blogPost', payload: id })
    }
};

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`,{title, content});
        dispatch({ type: 'edit_blogPost', payload: {id, title, content} });
        if(callback) {
            callback();
        }
    }
};

export const {Context, Provider} = createDataContext(
    blogReducer,
    {addBlogPost, deleteBlogPost, editBlogPost, getBlogPost},
    []
);