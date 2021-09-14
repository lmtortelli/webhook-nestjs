import { Migration } from '@mikro-orm/migrations';

export class Migration20210914010437 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `webhook` modify `event` enum(\'tag.generate.success\', \'tag.generate.failed\') not null;');
  }

}
