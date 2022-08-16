import { useState, useMemo } from "react";
import { css } from "styled-components/macro";
import {
    FileUploadBase,
    ToFull,
    FilesContainer,
    FileHolder,
    UploadButton,
    Column,
    Text,
    Paragraph,
    Button,
    RemoveButton,
    PitchDeckCardContainer,
    PitchDeckCardDetails,
} from "./styled";
import toast from "react-hot-toast";
import { CircularLoader } from "../CircluarLoader/CircularLoader";
import UploadIcon from "../../assets/icons/upload.svg";
import CancelIcon from "../../assets/icons/cancel.svg";
import SmallDocumentIcon from "../../assets/icons/small_document.svg";
import DocumentIcon from "../../assets/icons/document_upload.svg";
import VideoIcon from "../../assets/icons/videoIcon.svg";
import { bytesToSize, theme } from "./config";

const Document = ({ url, icon }) => {
    return (
        <PitchDeckCardContainer
            onClick={() => {
                if (typeof url !== "string") return;
                window.open(url, "_blank");
            }}
        >
            <Column flex={2} align="center" justify="center">
                <img src={icon === "video" ? VideoIcon : DocumentIcon} alt="" />
            </Column>
            <PitchDeckCardDetails gap={1} align="center" justify="center">
                <img src={SmallDocumentIcon} alt="" />
                <Column justify="center">
                    <Paragraph weight="normal" margin="0">
                        Pitch Deck
                    </Paragraph>
                    <Paragraph
                        size="sm"
                        color="rgba(24, 24, 25, 0.42)"
                        margin="0"
                    >
                        {"  "}
                    </Paragraph>
                </Column>
            </PitchDeckCardDetails>
        </PitchDeckCardContainer>
    );
};

const renderItem = (item, index, removeItem, filesUploaded) => {
    const { name, size, type, file } = item;
    switch (type.split("/")[0]) {
        case "image":
            return (
                <FileHolder key={index}>
                    {!filesUploaded && (
                        <RemoveButton
                            type="button"
                            onClick={() => removeItem(index)}
                        >
                            <img src={CancelIcon} alt="" />
                        </RemoveButton>
                    )}

                    <img src={URL.createObjectURL(file)} alt="file" />
                    <Column padding="0rem 1rem">
                        <Text color="black">{name}</Text>
                        <Text color="black">{size}</Text>
                    </Column>
                </FileHolder>
            );
        case "video":
            return (
                <FileHolder key={index} onClick={() => removeItem(index)}>
                    {!filesUploaded && (
                        <RemoveButton
                            type="button"
                            onClick={() => removeItem(index)}
                        >
                            <img src={CancelIcon} alt="" />
                        </RemoveButton>
                    )}
                    <video src={URL.createObjectURL(file)}></video>
                    <Column padding="0rem 1rem">
                        <Text color="black">{name}</Text>
                        <Text color="black">{size}</Text>
                    </Column>
                </FileHolder>
            );
        case "application":
            return (
                <FileHolder key={index} onClick={() => removeItem(index)}>
                    {!filesUploaded && (
                        <RemoveButton
                            type="button"
                            onClick={() => removeItem(index)}
                        >
                            <img src={CancelIcon} alt="" />
                        </RemoveButton>
                    )}
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
                    {!filesUploaded && (
                        <RemoveButton
                            type="button"
                            onClick={() => removeItem(index)}
                        >
                            <img src={CancelIcon} alt="" />
                        </RemoveButton>
                    )}
                    <Text color="black">{name}</Text>
                    <Text color="black">{size}</Text>
                    <Text color="black">{type.split("/")[0]}</Text>
                </FileHolder>
            );
    }
};

export const UploadFile = ({ data, onUpload, initData = [], fileType }) => {
    const [filesInfo, setFilesInfo] = useState([]);
    const [initialData, setInitialData] = useState(initData);
    const [loading, setLoading] = useState(false);
    const [filesUploaded, setFilesUploaded] = useState(false);
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const maxFileSize = useMemo(() => {
        if (!data) return 5;
        return data.maxFileSize;
    }, [data]);
    const extension = useMemo(() => {
        if (!data) return "MB";
        return data.extension;
    }, [data]);
    // console.log("initialData", initialData);

    const handleFiles = () => {
        if (!data) return toast.error("File config not found");
        console.log(initData);
        setFilesUploaded(false);
        const fileInput = document.createElement("input");
        fileInput.setAttribute("type", "file");
        if (data.maxFiles > 1) {
            fileInput.setAttribute("multiple", "multiple");
        }
        fileInput.click();

        fileInput.onchange = () => {
            if (!fileInput.files) return;
            const { files } = fileInput;
            if (files.length > data.maxFiles) {
                toast.error(
                    `You can't upload more than ${data.maxFiles} files`
                );
                return;
            }
            if (files.length === 0) return;
            const lFilesInfo = [];
            try {
                for (let i = 0; i < files.length; i += 1) {
                    const file = files[i];
                    const [size, ext] = bytesToSize(file.size).split(" ");
                    if (sizes.indexOf(ext) > sizes.indexOf(extension)) {
                        return toast.error(`File too large.`);
                    }
                    if (parseInt(size, 10) > maxFileSize && ext === extension) {
                        return toast.error(`File too large.`);
                    }
                    if (data.supportedMimeTypes.indexOf(file.type) === -1) {
                        return toast.error(
                            `File type ${file.type} is not supported`
                        );
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
                toast.error(`${e?.message}`);
            }
        };
    };

    const removeItem = (index) => {
        const newFilesInfo = filesInfo.filter((_, i) => i !== index);
        setFilesInfo(newFilesInfo);
    };

    const handleFileDrop = (fileList) => {
        if (fileList.length > data.maxFiles) {
            toast.error(`You can't upload more than ${data.maxFiles} files`);
            return;
        }
        if (fileList.length === 0) return;
        const lFilesInfo = [];
        try {
            for (let i = 0; i < fileList.length; i += 1) {
                const file = fileList[i];
                const [size, ext] = bytesToSize(file.size).split(" ");
                if (sizes.indexOf(ext) > sizes.indexOf(extension)) {
                    return toast.error(`File too large.`);
                }
                if (parseInt(size, 10) > maxFileSize && ext === extension) {
                    return toast.error(`File too large.`);
                }
                if (data.supportedMimeTypes.indexOf(file.type) === -1) {
                    return toast.error(
                        `File type ${file.type} is not supported`
                    );
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
            toast.error(`${e?.message}`);
        }
    };

    return (
        <FileUploadBase
            align="center"
            justify="center"
            width="100%"
            gap={0.5}
            onDragOver={(ev) => {
                ev.preventDefault();
                console.log("file is in our drop area.");
            }}
            onDragLeave={() => {
                console.log("file is out of our drop area.");
            }}
            onDrop={(ev) => {
                console.log("File Dropped");
                ev.preventDefault();
                console.log(ev.dataTransfer.files);
                handleFileDrop(ev.dataTransfer.files);
            }}
        >
            {!filesUploaded && filesInfo.length > 0 && (
                <UploadButton
                    type="button"
                    onClick={async () => {
                        try {
                            setLoading(true);
                            const data = await onUpload(filesInfo);
                            setLoading(false);
                            toast.success(
                                `${
                                    data.maxFiles > 1 ? "Files" : "File"
                                } uploaded successfully`
                            );
                            setFilesUploaded(true);
                            setFilesInfo([]);
                            setInitialData(data);
                        } catch (e) {
                            toast.error(`${e?.message}`);
                        }
                    }}
                >
                    {loading ? (
                        <CircularLoader color="#2E3192" />
                    ) : (
                        <img src={UploadIcon} alt="" />
                    )}
                </UploadButton>
            )}
            {filesInfo.length > 0 ? (
                <FilesContainer gap={1} align="center" justify="flex-end">
                    {filesInfo.map((item, i) =>
                        renderItem(item, i, removeItem, filesUploaded)
                    )}
                </FilesContainer>
            ) : initialData.length > 0 ? (
                <Column gap={1} align="center" justify="center">
                    {initialData.map((url, i) => {
                        return <Document key={i} url={url} icon={fileType} />;
                    })}
                    <ToFull padding="1rem" width="40%">
                        <Button
                            type="button"
                            background={theme.grey[100]}
                            onClick={handleFiles}
                        >
                            <Text weight="bold" color={theme.blue[500]}>
                                {data && data.maxFiles > 1
                                    ? "Upload new files"
                                    : "Upload new file"}
                            </Text>
                        </Button>
                    </ToFull>
                </Column>
            ) : (
                <>
                    <>
                        <img src={UploadIcon} alt="" />
                        <Paragraph
                            size="lg"
                            style={{
                                color: "rgba(24, 24, 25, 0.9)",
                                marginTop: "21px",
                            }}
                        >
                            Drag & Drop
                        </Paragraph>
                        <Paragraph
                            css={css`
                                margin-top: 0.5rem !important;
                            `}
                        >
                            Drag files or click here to upload
                        </Paragraph>
                        <Paragraph
                            color="#2E3192"
                            css={css`
                                margin-top: 0.5rem !important;
                                margin-bottom: 1rem !important;
                                text-align: center;
                            `}
                        >
                            Only files of type:{" "}
                            {(data &&
                                data.supportedMimeTypes
                                    .map((i) => i.split("/")[1])
                                    .join(", ")) ||
                                " any "}
                            ({"   "}
                            {`  Max.File size ${maxFileSize}${extension}`}{" "}
                            {"   "})
                        </Paragraph>
                        {/* <ToFull padding="1rem" width="40%"> */}
                        <button
                            type="button"
                            background={theme.grey[100]}
                            onClick={handleFiles}
                            css={css`
                                padding: 6px 12px;
                                background: #f9f9fc;
                                border-radius: 4px;
                                color: #2e3192;
                                font-weight: 500;
                                border: 0;
                            `}
                        >
                            {data && data.maxFiles > 1
                                ? "Upload files"
                                : "Upload file"}
                        </button>
                        {/* </ToFull> */}
                    </>
                </>
            )}
        </FileUploadBase>
    );
};
