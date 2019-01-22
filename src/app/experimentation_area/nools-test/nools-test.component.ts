import { RuleEngineService } from './../../rule-engine.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../../message';
// tslint:disable-next-line:no-unused-expression
declare var nools: any;
declare var hallo: any;

@Component({
  selector: 'app-nools-test',
  templateUrl: './nools-test.component.html',
  styleUrls: ['./nools-test.component.css']
})
export class NoolsTestComponent implements OnInit {

  constructor(engine: RuleEngineService) {
    /*engine.addRule('Goodbye', [Message, 'm', 'm.text =~ /.*goodbye$/'], function (facts) {
      console.log(facts.m.text);
    });
    engine.addRule('Hello', [Message, 'm', 'm.text =~ /^hello\\sworld$/'], function (facts) {
        facts.m.text = facts.m.text + ' goodbye';
        this.modify(facts.m);
    });
    engine.assert(new Message('hello world'));
    // engine.match();*/
  }

  ngOnInit() {
  }

}
