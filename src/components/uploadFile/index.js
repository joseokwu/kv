import { useState, useMemo } from 'react';
import { FileUploadBase, ToFull, FilesContainer, FileHolder, UploadButton, Column, Text, Paragraph, Button } from './styled';
import toast from 'react-hot-toast';
import UploadIcon from "../../assets/icons/upload.svg";
import { bytesToSize, theme } from './config';


const renderItem = (
    item,
    index,
    removeItem,
  ) => {
    const { name, size, type, file } = item;
    switch (type.split('/')[0]) {
      case 'image':
        return (
          <FileHolder key={index} onClick={() => removeItem(index)}>
            <img src={URL.createObjectURL(file)} alt="file" />
            <Column padding="0rem 1rem">
              <Text color="black">{name}</Text>
              <Text color="black">{size}</Text>
            </Column>
          </FileHolder>
        );
      case 'video':
        return (
          <FileHolder key={index} onClick={() => removeItem(index)}>
            <video>
              <track kind="captions" src={URL.createObjectURL(file)} />
            </video>
            <Column padding="0rem 1rem">
              <Text color="black">{name}</Text>
              <Text color="black">{size}</Text>
            </Column>
          </FileHolder>
        );
      case 'application':
        return (
          <FileHolder key={index} onClick={() => removeItem(index)}>
            <embed
              type={type}
              src={URL.createObjectURL(file)}
              height="100%"
              width="100%"
            />
            <Column padding="0rem 1rem">
              <Text color="black">{name}</Text>
              <Text color="black">{size}</Text>
            </Column>
          </FileHolder>
        );
      default:
        return (
          <FileHolder key={index} onClick={() => removeItem(index)}>
            <Text color="black">{name}</Text>
            <Text color="black">{size}</Text>
            <Text color="black">{type.split('/')[0]}</Text>
          </FileHolder>
        );
    }
  };
  
  export const UploadFile = ({ data }) => {
    const [filesInfo, setFilesInfo] = useState([]);
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const maxFileSize = useMemo(() => {
      if (!data) return 5;
      return data.maxFileSize;
    }, [data]);
    const extension = useMemo(() => {
      if (!data) return 'MB';
      return data.extension;
    }, [data]);
  
    const handleFiles = () => {
      if (!data)
        return toast.error('File config not found');
  
      const fileInput = document.createElement('input');
      fileInput.setAttribute('type', 'file');
      if (data.maxFiles > 1) {
        fileInput.setAttribute('multiple', 'multiple');
      }
      fileInput.click();
  
      fileInput.onchange = () => {
        if (!fileInput.files) return;
        const { files } = fileInput;
        if (files.length > data.maxFiles) {
          toast.error(`You can't upload more than ${data.maxFiles} files`);
          return;
        }
        if (files.length === 0) return;
        const lFilesInfo = [];
        try {
          for (let i = 0; i < files.length; i += 1) {
            const file = files[i];
            const [size, ext] = bytesToSize(file.size).split(' ');
            if (sizes.indexOf(ext) > sizes.indexOf(extension)) {
              return toast.error(`File too large.`);
            }
            if (parseInt(size, 10) > maxFileSize && ext === extension) {
              return toast.error(`File too large.`);
            }
            if (data.supportedMimeTypes.indexOf(file.type) === -1) {
              return toast.error(`File type ${file.type} is not supported`);
            }
            const lFileInfo = {
              name: file.name,
              size: size + ext,
              type: file.type,
              file,
            };
            lFilesInfo.push(lFileInfo);
          }
          setFilesInfo(lFilesInfo);
        } catch (e) {
          toast.error(`${(e)?.message}`);
        }
      };
    };
    const removeItem = (index) => {
      const newFilesInfo = filesInfo.filter((item, i) => i !== index);
      setFilesInfo(newFilesInfo);
    };
  
    return (
      <FileUploadBase align="center" justify="center" width="100%" gap={0.5}>
        {filesInfo.length > 0 ? (
          <FilesContainer gap={1} align="center" justify="flex-end">
            <UploadButton>
              <img src={UploadIcon} alt="" />
            </UploadButton>
            {filesInfo.map((item, i) => renderItem(item, i, removeItem))}
          </FilesContainer>
        ) : (
          <>
            <img src={UploadIcon} alt="" />
            <Paragraph size="lg">Drag & Drop</Paragraph>
            <Paragraph>Drag files or click here to upload</Paragraph>
            <Paragraph color="#2E3192">
              Only files of type:{' '}
              {(data &&
                data.supportedMimeTypes.map((i) => i.split('/')[1]).join(', ')) ||
                ' any '}
              ({'   '}
              {`  Max.File size ${maxFileSize}${extension}`} {'   '})
            </Paragraph>
            <ToFull padding="1rem" width="50%">
              <Button type='button' background={theme.grey[100]} onClick={handleFiles}>
                <Text weight="bold" color={theme.blue[500]}>
                  {data && data.maxFiles > 1 ? 'Upload files' : 'Upload file'}
                </Text>
              </Button>
            </ToFull>
          </>
        )}
      </FileUploadBase>
    );
  };
