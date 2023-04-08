export type TMessage = {
  id?: number;
  text: string;
  authorId: number;
  login: string;
  postId: number;
  date: Date;
  mainMessageId: number;
  emojis: TEmoji[];
};

export type TMessageWithID = Omit<TMessage, 'id'> & { id: number };

export type TPostEmojiRequest = {
  postId: number;
  messageId: number;
  emojiId: number;
  authorId: number;
};

export type TEmoji = {
  id: number;
  authorId: number[];
};
