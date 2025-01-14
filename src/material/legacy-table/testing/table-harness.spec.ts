import {MatLegacyTableModule} from '@angular/material/legacy-table';
import {runHarnessTests} from '@angular/material/legacy-table/testing/shared.spec';
import {MatLegacyTableHarness} from './table-harness';

describe('Non-MDC-based MatTableHarness', () => {
  runHarnessTests(MatLegacyTableModule, MatLegacyTableHarness);
});
