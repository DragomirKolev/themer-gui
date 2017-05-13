import React from 'react';
import { connect } from 'react-redux';
import Checkbox from './Checkbox';
import Button from './Button';
import { closeDialogs, exportThemes, setExportOption } from '../actions';
import css from './ExportDialog.css';

const ExportDialog = ({
  hyper,
  iterm,
  terminal,
  atomSyntax,
  sublimeText,
  vim,
  vimLightline,
  wallpaperBlockWave,
  wallpaperOctagon,
  slack,
  anySelected,
  setOption,
  onCancel,
  onExport,
}) => (
  <div>
    <p>Select with themes you'd like to export:</p>
    <form>
      <fieldset>
        <legend>Terminals</legend>
        <Checkbox
          value={ hyper }
          label="Hyper"
          onChange={ val => setOption('hyper', val) }
        />
        <Checkbox
          value={ iterm }
          label="iTerm"
          onChange={ val => setOption('iterm', val) }
        />
        <Checkbox
          value={ terminal }
          label="Terminal.app"
          onChange={ val => setOption('terminal', val) }
        />
      </fieldset>
      <fieldset>
        <legend>Editors</legend>
        <Checkbox
          value={ atomSyntax }
          label="Atom syntax"
          onChange={ val => setOption('atomSyntax', val) }
        />
        <Checkbox
          value={ sublimeText }
          label="Sublime Text"
          onChange={ val => setOption('sublimeText', val) }
        />
        <Checkbox
          value={ vim }
          label="Vim"
          onChange={ val => setOption('vim', val) }
        />
        <Checkbox
          value={ vimLightline }
          label="Vim lightline"
          onChange={ val => setOption('vimLightline', val) }
        />
      </fieldset>
      <fieldset>
        <legend>Wallpaper</legend>
        <Checkbox
          value={ wallpaperBlockWave }
          label="Block Wave"
          onChange={ val => setOption('wallpaperBlockWave', val) }
        />
        <Checkbox
          value={ wallpaperOctagon }
          label="Octagon"
          onChange={ val => setOption('wallpaperOctagon', val) }
        />
      </fieldset>
      <fieldset>
        <legend>Other</legend>
        <Checkbox
          value={ slack }
          label="Slack sidebar"
          onChange={ val => setOption('slack', val) }
        />
      </fieldset>
    </form>
    <Button
      primary
      onClick={ onExport }
      disabled={ !anySelected }
    >Export</Button>
  </div>
);

const mapStateToProps = state => ({
  ...state.exportOptions,
  anySelected: Object.values(state.exportOptions).some(v => v),
});
const mapDispatchToProps = dispatch => ({
  setOption: (option, value) => {
    dispatch(setExportOption(option, value));
  },
  onCancel: () => {
    dispatch(closeDialogs());
  },
  onExport: () => {
    dispatch(exportThemes());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExportDialog);
