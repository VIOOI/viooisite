let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
let EasyMotion_hl_move = "EasyMotionMoveHL"
let AutoPairsMapCh =  1 
let EasyMotion_off_screen_search =  1 
let EasyMotion_startofline =  1 
let AutoPairsMapBS =  1 
let EasyMotion_ignore_exception =  0 
let EasyMotion_move_highlight =  1 
let AutoPairsSmartQuotes =  1 
let AutoPairsShortcutBackInsert = "<M-b>"
let EasyMotion_disable_two_key_combo =  0 
let EasyMotion_re_line_anywhere = "\\v(<.|^$)|(.>|^$)|(\\l)\\zs(\\u)|(_\\zs.)|(#\\zs.)"
let EasyMotion_hl_group_shade = "EasyMotionShade"
let AutoPairsLoaded =  1 
let EasyMotion_use_regexp =  1 
let EasyMotion_use_migemo =  0 
let EasyMotion_re_anywhere = "\\v(<.|^$)|(.>|^$)|(\\l)\\zs(\\u)|(_\\zs.)|(#\\zs.)"
let EasyMotion_space_jump_first =  0 
let AutoPairsShortcutToggle = "<M-p>"
let EasyMotion_add_search_history =  1 
let EasyMotion_verbose =  1 
let AutoPairsShortcutFastWrap = "<M-e>"
let AutoPairsMultilineClose =  1 
let EasyMotion_smartcase =  0 
let EasyMotion_force_csapprox =  0 
let EasyMotion_loaded =  1 
let EasyMotion_hl_inc_cursor = "EasyMotionIncCursor"
let AutoPairsMapCR =  1 
let EasyMotion_hl2_first_group_target = "EasyMotionTarget2First"
let AutoPairsShortcutJump = "<M-n>"
let EasyMotion_show_prompt =  1 
let EasyMotion_hl2_second_group_target = "EasyMotionTarget2Second"
let EasyMotion_hl_inc_search = "EasyMotionIncSearch"
let AutoPairsMapSpace =  1 
let EasyMotion_hl_group_target = "EasyMotionTarget"
let EasyMotion_do_shade =  1 
let EasyMotion_use_upper =  0 
let AutoPairsMoveCharacter = "()[]{}\"'"
let EasyMotion_skipfoldedline =  1 
let EasyMotion_do_mapping =  1 
let AutoPairsWildClosedPair = ""
let EasyMotion_grouping =  1 
let AutoPairsCenterLine =  1 
let EasyMotion_landing_highlight =  0 
let EasyMotion_inc_highlight =  1 
let EasyMotion_cursor_highlight =  1 
let EasyMotion_keys = "asdghklqwertyuiopzxcvbnmfj;"
let EasyMotion_enter_jump_first =  0 
let AutoPairsFlyMode =  0 
let EasyMotion_prompt = "Search for {n} character(s): "
silent only
silent tabonly
cd ~/Documents/code/ReactJs/portfolio
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
set shortmess=aoO
badd +27 ~/Documents/code/ReactJs/portfolio/src/pages/blog/index.js
badd +0 ~/Documents/code/ReactJs/portfolio/src/App.js
badd +37 ~/Documents/code/ReactJs/portfolio/src/index.js
badd +37 ~/Documents/code/ReactJs/portfolio/src/components/menu.js
badd +4 ~/Documents/code/ReactJs/portfolio/src/components/post.js
argglobal
%argdel
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabrewind
edit ~/Documents/code/ReactJs/portfolio/src/pages/blog/index.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 104 + 104) / 208)
exe 'vert 2resize ' . ((&columns * 103 + 104) / 208)
argglobal
balt ~/Documents/code/ReactJs/portfolio/src/pages/blog/index.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 27 - ((26 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 27
normal! 020|
wincmd w
argglobal
if bufexists(fnamemodify("~/Documents/code/ReactJs/portfolio/src/components/post.js", ":p")) | buffer ~/Documents/code/ReactJs/portfolio/src/components/post.js | else | edit ~/Documents/code/ReactJs/portfolio/src/components/post.js | endif
if &buftype ==# 'terminal'
  silent file ~/Documents/code/ReactJs/portfolio/src/components/post.js
endif
balt ~/Documents/code/ReactJs/portfolio/src/index.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 4 - ((3 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 4
normal! 057|
wincmd w
2wincmd w
exe 'vert 1resize ' . ((&columns * 104 + 104) / 208)
exe 'vert 2resize ' . ((&columns * 103 + 104) / 208)
tabnext
edit ~/Documents/code/ReactJs/portfolio/src/index.js
argglobal
balt ~/Documents/code/ReactJs/portfolio/src/pages/blog/index.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 41 - ((40 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 41
normal! 09|
tabnext
edit ~/Documents/code/ReactJs/portfolio/src/App.js
argglobal
balt ~/Documents/code/ReactJs/portfolio/src/pages/blog/index.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 13 - ((12 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 13
normal! 0
tabnext
edit ~/Documents/code/ReactJs/portfolio/src/components/menu.js
argglobal
balt ~/Documents/code/ReactJs/portfolio/src/pages/blog/index.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 37 - ((36 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 37
normal! 025|
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
