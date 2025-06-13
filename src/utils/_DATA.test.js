import { _saveQuestion, _saveQuestionAnswer } from './_DATA';

describe('_saveQuestion', () => {
  it('should save a question with correct data', async () => {
    const question = {
      optionOneText: 'Option One',
      optionTwoText: 'Option Two',
      author: 'sarahedo',
    };
    const savedQuestion = await _saveQuestion(question);
    expect(savedQuestion).toHaveProperty('id');
    expect(savedQuestion.author).toBe('sarahedo');
  });

  it('should throw an error if data is incorrect', async () => {
    await expect(_saveQuestion({})).rejects.toEqual(
      'Please provide optionOneText, optionTwoText, and author'
    );
  });
});

describe('_saveQuestionAnswer', () => {
  it('should save an answer with correct data', async () => {
    const answer = { authedUser: 'sarahedo', qid: '8xf0y6ziyjabvozdd253nd', answer: 'optionOne' };
    const response = await _saveQuestionAnswer(answer);
    expect(response).toBe(true);
  });

  it('should throw an error if data is incorrect', async () => {
    await expect(_saveQuestionAnswer({})).rejects.toEqual(
      'Please provide authedUser, qid, and answer'
    );
  });
});
