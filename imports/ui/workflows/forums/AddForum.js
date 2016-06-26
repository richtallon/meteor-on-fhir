import { Bert } from 'meteor/themeteorchef:bert'
import React  from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card'
import Input  from 'react-toolbox/lib/input'
import { insertPost } from '../../../api/posts/methods.js'
import { GlassCard } from '../../components/GlassCard'

const handleInsertPost = (event) => {
  const target = event.target;
  const title = target.value.trim();
  const createdAt = new Date();

  if (title !== '' && event.keyCode === 13) {
    console.log('title', title);
    insertPost.call({
      title,
      createdAt
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        target.value = '';
        Bert.alert('Post added!', 'success');
      }
    });
  }
};

export const AddForum = () => (
  <GlassCard>
    <CardTitle
      title="New Forum"
    />
    <CardText>
      <FormGroup>
        <Input
          label='Add Post'
          name='addPost'
          type="textarea"
          onKeyUp={ handleInsertPost }
          ref="addPost" />
      </FormGroup>
    </CardText>
  </GlassCard>

);