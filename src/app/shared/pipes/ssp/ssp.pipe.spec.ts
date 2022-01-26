import { of, throwError } from 'rxjs';
import { SspPipe } from './ssp.pipe';

describe('SspPipe', () => {
  it('create an instance', () => {
    const pipe = new SspPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve apresentar error', () => {
    const pipe = new SspPipe();
    const res = pipe.transform(throwError(() => 'Um erro ocorreu'));
    res.subscribe((d) => {
      expect(d.error).toBeTruthy();
    });
  });
});
