import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link as LinkButton } from 'react-router5';
import { PAGES } from 'router';

import styles from './styles';

const mapStateToProps = ({ user, posts }) => ({
  user,
  posts: posts.items
});

export function Main({ user, posts }) {
  return (
    <div className={ styles.page }>
      <nav>
        <LinkButton routeName={ PAGES.MAIN }>
          Main
        </LinkButton>
        <LinkButton routeName={ PAGES.ABOUT }>
          About us
        </LinkButton>
      </nav>
      <div>
        User: { user.name }.
      </div>
      <div>
        Email: { user.email }.
      </div>
      <h1 className={ styles.art }>
        Posts
      </h1>

      { posts.map(({ title, body }, index) => <div key={ index }>{ title }: { body }</div>) }
    </div>
  );
}

Main.propTypes = {

  /** Данные пользователя */
  user: PropTypes.shape({

    /** Имя */
    name: PropTypes.string.isRequired,

    /** Почта */
    email: PropTypes.string.isRequired

  }).isRequired,

  /** Посты */
  posts: PropTypes.arrayOf(PropTypes.shape({

    /** Заголовок */
    title: PropTypes.string,

    /** Текст */
    body: PropTypes.string

  })).isRequired
};

export default connect(mapStateToProps)(Main);
