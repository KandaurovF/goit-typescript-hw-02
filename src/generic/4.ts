/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:


class Component {
  constructor (public props:T) {

  }
}

class Page extends Component {
  pageInfo () {
    console.log(this.props.title);
  }
}
*/

interface BookInfo {
  title: string;
  pageInfo(): void;
}
class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<BookInfo> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};